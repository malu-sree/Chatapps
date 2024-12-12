// import { useState } from "react";

// const MessageInput = () => {
// 	const [message, setMessage] = useState("");

// 	const handleSend = () => {
// 		if (!message.trim()) return;

// 		// Add logic to send the message to the backend or state
// 		console.log("Message sent:", message);

// 		// Clear the input field
// 		setMessage("");
// 	};

// 	return (
// 		<div className="flex items-center gap-2 p-3 border-t">
// 			<input
// 				type="text"
// 				className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
// 				placeholder="Type a message..."
// 				value={message}
// 				onChange={(e) => setMessage(e.target.value)}
// 			/>
// 			<button
// 				className="px-4 py-2 bg-blue-500 text-black rounded-lg"
// 				onClick={handleSend}
// 			>
// 				Send
// 			</button>
// 		</div>
// 	);
// };

// export default MessageInput;


import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  const inputContainerStyle = {
    position: "relative",
    width: "100%",
    marginBottom: "1rem", // Adds spacing below the input field
  };

  const inputStyle = {
    width: "100%",
    padding: "0.625rem", // Padding for the input field
    fontSize: "0.875rem", // Small font size
    borderRadius: "0.375rem", // Rounded corners
    backgroundColor: "#2d3748", // Dark background
    border: "1px solid #4a5568", // Border color
    color: "#fff", // White text
  };

  const buttonContainerStyle = {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    padding: "0.5rem",
    cursor: "pointer",
  };

  const loadingSpinnerStyle = {
    fontSize: "1.5rem", // Adjust the spinner size
    color: "#fff", // White spinner
  };

  return (
    <form style={{ padding: "0 1rem" }} onSubmit={handleSubmit}>
      <div style={inputContainerStyle}>
        <input
          type="text"
          style={inputStyle}
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" style={buttonContainerStyle}>
          {loading ? (
            <div style={loadingSpinnerStyle} className="loading loading-spinner"></div>
          ) : (
            <BsSend style={{ fontSize: "1.5rem", color: "#38b2ac" }} />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
