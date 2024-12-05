const Conversation = require("../models/conversationModel.js");
const Message = require("../models/messageModel.js");



const sendMessage = async (req, res) => {
    try {
      const { message } = req.body;
      const { id: receiverId } = req.params;
      const senderId = req.user._id;
  
      console.log(`Receiver ID: ${receiverId}, Sender ID: ${senderId}, Message: ${message}`);
  
      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });
  
      if (!conversation) {
        console.log('Creating a new conversation...');
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }
  
      const newMessage = new Message({
        senderId,
        receiverId,
        message,
      });
  
    //   await newMessage.save();  // Save the new message to the database
    await Promise.all([conversation.save(), newMessage.save()]);
      // Add the message to the conversation
      conversation.messages.push(newMessage._id);
      await conversation.save();  // Save the updated conversation
  
      res.status(201).json(newMessage);
    } catch (error) {
      console.log("Error in sendMessage controller: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages"); // NOT REFERENCE BUT ACTUAL MESSAGES

		if (!conversation) return res.status(200).json([]);

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = { sendMessage };
