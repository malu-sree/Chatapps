// import useGetConversations from "../../hooks/useGetConversation";
// import Conversation from "./conversation";

// const Conv = () => {

// 	const { loading, conversations } = useGetConversations();
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			{conversations.map((conversation, idx) => (
// 				<Conversation
// 					key={conversation._id}
// 					conversation={conversation}
// 					// emoji={getRandomEmoji()}
// 					lastIdx={idx === conversations.length - 1}
// 				/>
// 			))}

// 			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
// 		</div>
// 	);
// };




// // 	const {loading,conversations}=useGetConversations()
// // 	console.log("CONVERSATIONA:",conversations)
// // 	return (
// // 		<div className='py-2 flex flex-col overflow-auto'>
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 			<Conversation />
// // 		</div>
// // 	);
//  };
// export default Conv;



import useGetConversations from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./conversation";

const Conv = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {/* Show loading spinner when loading is true */}
      {loading && <span className="loading loading-spinner mx-auto"></span>}

      {/* Check if conversations exist, else show a placeholder */}
      {conversations.length === 0 && !loading && (
        <p className="text-center text-gray-500">No conversations available</p>
      )}

      {/* Render the conversations list */}
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
    </div>
  );
};

export default Conv;
