// import useGetConversations from "../../hooks/useGetConversation";
// const Conversation = ({ conversation, lastIdx, emoji }) => {
//     	return (
//     		<>
//     			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//     				<div className='avatar online'>
//     					<div className='w-12 rounded-full'>
//     						<img
//     							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
//     							alt='user avatar'
//     						/>
//     					</div>
//     				</div>
    
//     				<div className='flex flex-col flex-1'>
//     					<div className='flex gap-3 justify-between'>
//     						<p className='font-bold text-gray-200'>{conversation.fullName}</p>
//     						<span className='text-xl'>{emoji}</span>
//     					</div>
//     				</div>
//     			</div>
    
//     			<div className='divider my-0 py-0 h-1' />
//     		</>
//     	);
//     };
//     export default Conversation;


// import useGetConversations from "../../hooks/useGetConversation";

// const Conversation = ({ conversation, lastIdx, emoji }) => {
//     return (
//         <div className={`d-flex justify-content-between align-items-center p-3 ${lastIdx ? "" : "border-bottom"}`}>
//             {/* Avatar Section */}
//             <div className="d-flex align-items-center">
//                 <div className="avatar online me-3">
//                     <img
//                         src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
//                         alt="user avatar"
//                         className="rounded-circle"
//                         style={{ width: "50px", height: "50px" }}
//                     />
//                 </div>
//                 {/* Conversation Info */}
//                 <div className="d-flex flex-column">
//                     <div className="d-flex justify-content-between align-items-center">
//                         <p className="mb-0 fw-bold text-dark">{conversation.fullName}</p>
//                         <span className="fs-3">{emoji}</span>
//                     </div>
//                     {/* <small className="text-muted">Last message here...</small> Optional: add the last message */}
//                 </div>
//             </div>

//             {/* Divider */}
//             <div className={`w-100 ${lastIdx ? "" : "border-bottom"}`}></div>
//         </div>
//     );
// };

// export default Conversation;


import useGetConversations from "../../hooks/useGetConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
    return (
        <div className={`d-flex justify-content-between align-items-center p-3 ${lastIdx ? "" : "border-bottom"}`}>
            
            {/* Avatar Section */}
            <div className="d-flex align-items-center">
                <div className="avatar online me-3">
                    <img
                        src={conversation.profilePic}
						alt='user avath'
                        className="rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                    />
                </div>

                {/* Conversation Info */}
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0 fw-bold text-dark">{conversation.fullName}</p>
                        <span className="fs-3">{emoji}</span>
                    </div>
                    {/* Optional: You can uncomment the line below to show the last message */}
                    {/* <small className="text-muted">Last message here...</small> */}
                </div>
            </div>

            {/* Divider */}
            <div className={`w-100 ${lastIdx ? "" : "border-bottom"}`}></div>
        </div>
    );
};

export default Conversation;
