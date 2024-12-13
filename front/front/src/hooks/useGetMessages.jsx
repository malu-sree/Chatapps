// import { useEffect, useState } from "react";
// import useConversation from "../zustand/useConversation";
// import toast from "react-hot-toast";

// const useGetMessages = () => {
// 	const [loading, setLoading] = useState(false);
// 	const { messages, setMessages, selectedConversation } = useConversation();

// 	useEffect(() => {
// 		const getMessages = async () => {
// 			setLoading(true);
// 			try {
// 				const res = await fetch(`http://localhost:5002/api/messages/${selectedConversation._id}`);
// 				const data = await res.json();
// 				if (data.error) throw new Error(data.error);
// 				setMessages(data);
// 			} catch (error) {
// 				toast.error(error.message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		if (selectedConversation?._id) getMessages();
// 	}, [selectedConversation?._id, setMessages]);

// 	return { messages, loading };
// };
// export default useGetMessages;


// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const useGetMessages = (selectedConversation) => {
//   const [loading, setLoading] = useState(false);
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     const getMessages = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem("jwt");  // Retrieve token from localStorage

//         if (!token) {
//           throw new Error("No authentication token found");
//         }

//         const res = await fetch(`http://localhost:5002/api/messages/${selectedConversation._id}`, {
//           method: "GET",
//           headers: {
//             "Authorization": `Bearer ${token}`,  // Add token to Authorization header
//           },
//           credentials: "include", // Include cookies if necessary
//         });

//         const data = await res.json();

//         console.log(data); // Log the response data

//         if (data.error) {
//           throw new Error(data.error);
//         }

//         setMessages(data); // Set messages if data is valid
//       } catch (error) {
//         toast.error(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (selectedConversation?._id) {
//       getMessages(); // Fetch messages only if a conversation is selected
//     }
//   }, [selectedConversation]); // Re-run when selectedConversation changes

//   return { loading, messages };
// };

// export default useGetMessages;


import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        // Retrieve the token from localStorage or context
        const token = localStorage.getItem("chat-user"); // or use your auth context

        if (!token) {
          throw new Error("No authentication token found");
        }

        const res = await fetch(`http://localhost:5002/api/messages/${selectedConversation._id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Add the token to the header
          },
          credentials: "include", // if cookies are needed
        });

        const data = await res.json();
        
        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};

export default useGetMessages;
