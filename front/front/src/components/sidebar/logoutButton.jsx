import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto'>
			<button 
				className={`btn btn-primary ${loading ? "btn-disabled" : ""}`} 
				onClick={logout} 
				disabled={loading}
			>
				{loading ? (
					<span className='loading loading-spinner'></span>
				) : (
					"Logout"
				)}
			</button>
		</div>
	);
};

export default LogoutButton;
