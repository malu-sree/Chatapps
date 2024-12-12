

// import { useEffect } from "react";
// import useConversation from "../../zustand/useConversation";
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";
// import { TiMessages } from "react-icons/ti";
// import { useAuthContext } from "../../context/AuthContext";

// const MessageContainer = () => {
// 	const { selectedConversation, setSelectedConversation } = useConversation();

// 	useEffect(() => {
// 		// Cleanup function (unmount)
// 		return () => setSelectedConversation(null);
// 	}, [setSelectedConversation]);

// 	return (
// 		<div className="md:min-w-[450px] flex flex-col h-full">
// 			{!selectedConversation ? (
// 				<NoChatSelected />
// 			) : (
// 				<>
// 					{/* Header */}
// 					<div className="bg-slate-500 px-4 py-2 mb-2">
// 						<span className="label-text">To:</span>{" "}
// 						<span className="text-gray-900 font-bold">
// 							{selectedConversation.fullName}
// 						</span>
// 					</div>
// 					{/* Messages */}
// 					<div className="flex-1 overflow-y-auto">
// 						<Messages />
// 					</div>
// 					{/* Input */}
// 					<MessageInput />
// 				</>
// 			)}
// 		</div>
// 	);
// };

// export default MessageContainer;

// const NoChatSelected = () => {
// 	const { authUser } = useAuthContext();
// 	return (
// 		<div className="flex items-center justify-center w-full h-full">
// 			<div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
// 				<p>Welcome 👋 {authUser.fullName} ❄</p>
// 				<p>Select a chat to start messaging</p>
// 				<TiMessages className="text-3xl md:text-6xl text-center" />
// 			</div>
// 		</div>
// 	);
// };


import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // Cleanup function (unmount)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  const messageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  };

  const messageHeaderStyle = {
    backgroundColor: "#6b7280", /* Slate color */
    padding: "16px",
    marginBottom: "16px",
    color: "#fff",
    fontSize: "1.125rem",
  };

  const userNameStyle = {
    fontWeight: "bold",
  };

  const messagesAreaStyle = {
    flexGrow: 1,
    overflowY: "auto",
    padding: "16px",
    backgroundColor: "#f3f4f6", /* Light gray background */
  };

  const messageInputStyle = {
    padding: "16px",
    backgroundColor: "#fff",
    borderTop: "1px solid #ddd",
  };

  return (
    <div style={messageContainerStyle}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div style={messageHeaderStyle}>
            <span className="label-text">To:</span>{" "}
            <span style={userNameStyle}>
              {selectedConversation.fullName}
            </span>
          </div>

          {/* Messages */}
          <div style={messagesAreaStyle}>
            <Messages />
          </div>

          {/* Input */}
          <MessageInput style={messageInputStyle} />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  const noChatSelectedStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#f3f4f6", /* Same light gray background */
  };

  const messageStyle = {
    textAlign: "center",
    color: "#4b5563", /* Gray text */
  };

  const messageIconStyle = {
    fontSize: "3rem",
    color: "#9ca3af", /* Light gray color for the icon */
  };

  return (
    <div style={noChatSelectedStyle}>
      <div style={messageStyle}>
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages style={messageIconStyle} />
      </div>
    </div>
  );
};

export default MessageContainer;
