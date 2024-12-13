// import useGetMessages from "../../hooks/useGetMessages";
// import MessageSkeleton from "../messageSkeleton";
// import Mess from "./mess";
// const Messages = () => {
// 	const {messages,loading} =useGetMessages()
// 	console.log("messages:",messages)
// 	return (
// 		// <div className='px-4 flex-1 overflow-auto'>
// 		// 	<Mess />
// 		// 	<Mess />
// 		// 	<Mess />
// 		// 	<Mess />
// 		// 	<Mess />
// 		// 	<Mess />
			
// 		// 	<Mess />
// 		// 	<Mess />
// 		// 	<Mess />
// 		// </div>

// 		<div  className="px-4 flex-1 overflow-auto">
// 			{loading && [...Array(3)].map((_, idx)=> <MessageSkeleton key={idx}/>)}
// 			{!loading && messages.length === 0 && (
// 				<p className='text-center'>Send a message to start the conversation</p>
// 			)}
// 		</div>
// 	);
// };
// export default Messages;

import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../messageSkeleton";
import Mess from "./mess"; // Make sure you're using the correct Message component

const Messages = () => {
  const { messages, loading } = useGetMessages();
  console.log("messages:", messages);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* Show skeletons while loading */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* Show a message if no messages are found */}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {/* Render messages once loading is done */}
      {!loading && messages.length > 0 && messages.map((message) => (
        <Mess key={message._id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
