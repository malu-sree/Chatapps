

// import LogoutButton from "./logoutButton";
// import Conv from "./conv";
// import SearchInput from "./searchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='bg-light border-end border-slate-500 p-4 d-flex flex-column' style={{ width: "300px", height: "100vh", overflowY: "auto" }}>
// 			{/* Search Input */}
// 			<SearchInput />
			
// 			{/* Divider */}
// 			<div className='my-3'>
// 				<hr />
// 			</div>
			
// 			{/* Conversations */}
// 			<Conv />
			
// 			{/* Logout Button */}
// 			<LogoutButton />
// 		</div>
// 	);
// };

// export default Sidebar;


import LogoutButton from "./logoutButton";
import Conv from "./conv";
import SearchInput from "./searchInput";

const Sidebar = () => {
	return (
		<div 
			className='bg-light border-end border-slate-500 p-4 d-flex flex-column' 
			style={{ width: "350px", height: "100vh", overflowY: "auto" }} // Increased width
		>
			{/* Search Input */}
			<SearchInput />
			
			{/* Divider */}
			<div className='my-3'>
				<hr />
			</div>
			
			{/* Conversations */}
			<Conv />
			
			{/* Logout Button */}
			<LogoutButton />
		</div>
	);
};

export default Sidebar;
