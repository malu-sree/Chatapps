import useGetConversations from "../../hooks/useGetConversation";
import Conversation from "./conversation";

const Conv = () => {
	const {loading,conversations}=useGetConversations()
	console.log("CONVERSATIONA:",conversations)
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
			<Conversation />
		</div>
	);
};
export default Conv;