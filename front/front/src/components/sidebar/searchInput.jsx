


import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5"; // New icon import
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const [filteredConversations, setFilteredConversations] = useState([]);

  // Handle input change and filter suggestions
  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length >= 3) {
      const filtered = conversations.filter((c) =>
        c.fullName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredConversations(filtered);
    } else {
      setFilteredConversations([]);
    }
  };

  // Handle selection of a conversation
  const handleSelect = (conversation) => {
    setSelectedConversation(conversation);
    setSearch("");
    setFilteredConversations([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    if (search.length < 3) {
      toast.error("Search term must be at least 3 characters long");
      return;
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
      setFilteredConversations([]);
    } else {
      toast.error("No such user found!");
    }
  };

  // Inline styles
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      position: "relative",
      maxWidth: "400px",
      margin: "0 auto",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px",
      border: "1px solid #ddd",
      borderRadius: "24px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    input: {
      flex: 1,
      padding: "8px 12px",
      border: "none",
      outline: "none",
      borderRadius: "24px",
      fontSize: "14px",
      backgroundColor: "transparent",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "40px",
      height: "40px",
      backgroundColor: "#0ea5e9",
      color: "#fff",
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#0284c7",
    },
    suggestionsBox: {
      position: "absolute",
      top: "100%",
      left: "0",
      width: "100%",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      zIndex: 10,
      maxHeight: "200px",
      overflowY: "auto",
    },
    suggestionItem: {
      padding: "12px",
      fontSize: "14px",
      color: "#333",
      cursor: "pointer",
      borderBottom: "1px solid #f1f1f1",
      transition: "background-color 0.3s ease",
    },
    suggestionItemHover: {
      backgroundColor: "#f1f5f9",
      color: "#0ea5e9",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search…"
          value={search}
          onChange={handleChange}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0284c7")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0ea5e9")}
        >
          <IoAddCircleOutline style={{ width: "22px", height: "22px" }} />
        </button>
      </form>

      {/* Suggestions List */}
      {filteredConversations.length > 0 && (
        <div style={styles.suggestionsBox}>
          {filteredConversations.map((conversation) => (
            <div
              key={conversation._id}
              style={styles.suggestionItem}
              onMouseOver={(e) =>
                Object.assign(e.currentTarget.style, styles.suggestionItemHover)
              }
              onMouseOut={(e) =>
                Object.assign(e.currentTarget.style, styles.suggestionItem)
              }
              onClick={() => handleSelect(conversation)}
            >
              {conversation.fullName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
