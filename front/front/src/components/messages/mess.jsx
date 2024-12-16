
// const Mess=()=>{
//     return(
//         <>

//         <p>hi whatsappp</p>
//         </>
//     )
// }

// export default Mess


// import { useAuthContext } from "../../context/AuthContext";

// import useConversation from "../../zustand/useConversation";

// const Message = ({ message }) => {
// 	const { authUser } = useAuthContext();
// 	const { selectedConversation } = useConversation();
// 	const fromMe = message.senderId === authUser._id;
	
// 	const chatClassName = fromMe ? "chat-end" : "chat-start";
// 	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
// 	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	

// 	return (
// 		<div className={`chat ${chatClassName}`}>
// 			<div className='chat-image avatar'>
// 				<div className='w-10 rounded-full'>
// 					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
// 				</div>
// 			</div>
// 			<div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
// 			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12.42</div>
// 		</div>
// 	);
// };
// export default Message;

// import { useAuthContext } from "../../context/AuthContext";
// import useConversation from "../../zustand/useConversation";

// const Mess = ({ message }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation } = useConversation();
  
//   console.log("Message:", message); // Log message data to check if it is received correctly

//   const fromMe = message?.senderId === authUser?._id;
//   const chatClassName = fromMe ? "chat-end" : "chat-start";
  
//   const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  
//   // Fallback if profilePic is missing
//   const profilePicToUse = profilePic || "https://via.placeholder.com/40"; // Add a placeholder image

//   const bubbleBgColor = fromMe ? "bg-blue-500" : "";

//   return (
//     <div className={`chat ${chatClassName}`}>
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img alt="User Profile" src={profilePicToUse} />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
//         {message?.message || "No message content"} {/* Add fallback text */}
//       </div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
//         12.42 {/* For now, hardcode time or implement time logic */}
//       </div>
//     </div>
//   );
// };

// export default Mess;

// import { useAuthContext } from "../../context/AuthContext";
// import useConversation from "../../zustand/useConversation";

// const Mess = ({ message }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation } = useConversation();

//   console.log("Message:", message); // Log message data to check if it is received correctly

//   const fromMe = message?.senderId === authUser?._id;
//   const chatClassName = fromMe ? "chat-end" : "chat-start";

//   const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;

//   // Fallback if profilePic is missing
//   const profilePicToUse = profilePic || "https://via.placeholder.com/40"; // Add a placeholder image

//   const bubbleBgColor = fromMe ? "#007bff" : "#f1f1f1"; // Blue for sent, gray for received messages
//   const textColor = fromMe ? "#fff" : "#333"; // White for sent, dark for received messages

//   const chatStyles = {
//     display: "flex",
//     alignItems: "flex-start",
//     marginBottom: "16px",
//     padding: "0 12px",
//     flexDirection: fromMe ? "row-reverse" : "row", // Reverse row for sent messages
//   };

//   const avatarStyles = {
//     marginRight: "10px",
//     display: "flex",
//     alignItems: "center",
//   };

//   const avatarImgStyles = {
//     width: "40px",
//     height: "40px",
//     borderRadius: "50%",
//     objectFit: "cover", // Ensure image doesn't stretch
//     border: "2px solid #f1f1f1", // Light border around profile pic
//   };

//   const bubbleStyles = {
//     maxWidth: "75%",
//     padding: "12px 16px",
//     borderRadius: "18px",
//     fontSize: "14px",
//     lineHeight: "1.5",
//     wordWrap: "break-word",
//     wordBreak: "break-word",
//     marginBottom: "4px",
//     display: "inline-block",
//     backgroundColor: bubbleBgColor,
//     color: textColor,
//     boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Add shadow for elevation
//   };

//   const footerStyles = {
//     fontSize: "12px",
//     color: "#888",
//     marginTop: "4px",
//     display: "flex",
//     justifyContent: "flex-end",
//     alignItems: "center",
//     opacity: "0.6",
//   };

//   return (
//     <div style={chatStyles}>
//       <div style={avatarStyles}>
//         <div style={{ width: "40px", height: "40px", borderRadius: "50%" }}>
//           <img alt="User Profile" src={profilePicToUse} style={avatarImgStyles} />
//         </div>
//       </div>
//       <div style={bubbleStyles}>
//         {message?.message || "No message content"} {/* Add fallback text */}
//       </div>
//       <div style={footerStyles}>
//         {/* Hardcoded time for now */}
//         <span>12:42</span>
//       </div>
//     </div>
//   );
// };

// export default Mess;

import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime"; // Import extractTime function

const Mess = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  console.log("Message:", message); // Log message data to check if it is received correctly

  const fromMe = message?.senderId === authUser?._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;

  // Fallback if profilePic is missing
  const profilePicToUse = profilePic || "https://via.placeholder.com/40"; // Add a placeholder image

  const bubbleBgColor = fromMe ? "#007bff" : "#f1f1f1"; // Blue for sent, gray for received messages
  const textColor = fromMe ? "#fff" : "#333"; // White for sent, dark for received messages

  const chatStyles = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "16px",
    padding: "0 12px",
    flexDirection: fromMe ? "row-reverse" : "row", // Reverse row for sent messages
  };

  const avatarStyles = {
    marginRight: "10px",
    display: "flex",
    alignItems: "center",
  };

  const avatarImgStyles = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover", // Ensure image doesn't stretch
    border: "2px solid #f1f1f1", // Light border around profile pic
  };

  const bubbleStyles = {
    maxWidth: "75%",
    padding: "12px 16px",
    borderRadius: "18px",
    fontSize: "14px",
    lineHeight: "1.5",
    wordWrap: "break-word",
    wordBreak: "break-word",
    marginBottom: "4px",
    display: "inline-block",
    backgroundColor: bubbleBgColor,
    color: textColor,
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Add shadow for elevation
  };

  const footerStyles = {
    fontSize: "12px",
    color: "#888",
    marginTop: "4px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    opacity: "0.6",
  };

  // Extract time using the extractTime function
  const messageTime = extractTime(message?.createdAt); // Assuming message has createdAt field

  return (
    <div style={chatStyles}>
      <div style={avatarStyles}>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%" }}>
          <img alt="User Profile" src={profilePicToUse} style={avatarImgStyles} />
        </div>
      </div>
      <div style={bubbleStyles}>
        {message?.message || "No message content"} {/* Add fallback text */}
      </div>
      <div style={footerStyles}>
        {/* Display the formatted time */}
        <span>{messageTime}</span>
      </div>
    </div>
  );
};

export default Mess;
