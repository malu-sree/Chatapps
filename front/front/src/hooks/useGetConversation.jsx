// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const useGetConversations = () => {
// 	const [loading, setLoading] = useState(false);
// 	const [conversations, setConversations] = useState([]);

// 	useEffect(() => {
// 		const getConversations = async () => {
// 			setLoading(true);
// 			try {
// 				const res = await fetch("http://localhost:5002/api/users");
// 				const data = await res.json();
// 				if (data.error) {
// 					throw new Error(data.error);
// 				}
// 				setConversations(data);
// 			} catch (error) {
// 				toast.error(error.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		getConversations();
// 	}, []);

// 	return { loading, conversations };
// };
//  export default useGetConversations;


// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const useGetConversations = () => {
//   const [loading, setLoading] = useState(false);
//   const [conversations, setConversations] = useState([]);

//   useEffect(() => {
//     const getConversations = async () => {
//       setLoading(true);
//       try {
//         // Get the token from localStorage or cookies
//         const token = localStorage.getItem("chat-user")?.jwt; // Replace this with your token storage method

//         const res = await fetch("http://localhost:5002/api/users", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}` // Include the token in the Authorization header
//           },
//         });

//         if (!res.ok) {
//           throw new Error("Unauthorized");
//         }

//         const data = await res.json();

//         if (data.error) {
//           throw new Error(data.error);
//         }

//         setConversations(data);
//       } catch (error) {
//         toast.error(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getConversations();
//   }, []);

//   return { loading, conversations };
// };

// export default useGetConversations;


// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const useGetConversations = () => {
// 	const [loading, setLoading] = useState(false);
// 	const [conversations, setConversations] = useState([]);

// 	useEffect(() => {
// 		const getConversations = async () => {
// 			setLoading(true);
// 			try {
// 				// Get the token from localStorage or any other storage
// 				const token = localStorage.getItem("auth-token");
// 				if (!token) {
// 					throw new Error("Unauthorized: Token not found");
// 				}

// 				// Make the API request with the Authorization header
// 				const res = await fetch("http://localhost:5002/api/users", {
// 					method: "GET",
// 					headers: {
// 						"Content-Type": "application/json",
// 						Authorization: `Bearer ${token}`,
// 					},
// 				});
				
// 				// Check if the response status is not OK
// 				if (!res.ok) {
// 					const errorData = await res.json();
// 					throw new Error(errorData.message || "Failed to fetch conversations");
// 				}

// 				// Parse and set the conversations data
// 				const data = await res.json();
// 				setConversations(data);
// 			} catch (error) {
// 				toast.error(error.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		getConversations();
// 	}, []);

// 	return { loading, conversations };
// };

// export default useGetConversations;


import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("jwt");  // Retrieve token from localStorage
        const res = await fetch("http://localhost:5002/api/users", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,  // Add token to Authorization header
          },
		  credentials: "include"
        });

        const data = await res.json();

        console.log(data); // Log the response data

        if (data.error) {
          throw new Error(data.error);
        }
        
        setConversations(data); // Set conversations if data is valid
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
