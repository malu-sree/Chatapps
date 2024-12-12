// import MessageContainer from "../../components/messages/messageContainer";
// import Sidebar from "../../components/sidebar/sidebar";

// const Home = () => {
// 	return (
// 		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 			<Sidebar />
// 			<MessageContainer />
// 		</div>
// 	);
// };
// export default Home;


import MessageContainer from "../../components/messages/messageContainer";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
    // Inline styles for the layout
    const homeContainerStyle = {
        display: 'flex',  // Use flexbox for side-by-side layout
        height: '100vh',  // Full height of the viewport
    };

    const sidebarStyle = {
        width: '300px',  // Set width for the sidebar
        backgroundColor: '#f4f4f4',  // Light background color for sidebar
        borderRight: '2px solid #ddd',  // Optional: add a border to the right of the sidebar
        padding: '20px',
    };

    const messageContainerStyle = {
        flexGrow: 1,  // Fill remaining space
        backgroundColor: 'white',  // Set a background color for the message area
        padding: '20px',
        overflow: 'hidden',  // Prevent scrollbars on the message container
    };

    return (
        <div style={homeContainerStyle}>
            {/* Sidebar */}
            <Sidebar style={sidebarStyle} />

            {/* Message Container */}
            <div style={messageContainerStyle}>
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
