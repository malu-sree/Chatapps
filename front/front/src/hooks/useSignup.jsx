import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
	const [loading, setLoading] = useState(false);
	const {setAuthUser} =useAuthContext()

	const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
		const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("http://localhost:5002/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
				// credentials: "include"
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			// Store user data in localStorage
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data)
			// You can access the user data later as needed
			// For example: const user = JSON.parse(localStorage.getItem("chat-user"));

			toast.success("Signup successful!");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
	if (!fullName || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
