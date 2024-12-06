 
// import LogoutButton from "./LogoutButton";
import Conv from "./conv";
import SearchInput from "./searchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conv/>
			{/* <LogoutButton />  */}
		</div>
	);
};
export default Sidebar;