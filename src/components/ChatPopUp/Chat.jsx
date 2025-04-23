import React, { useState } from "react";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import "./chat.css";

// Updated to call your backend
const getChatResponse = async (userMessage) => {
  try {
    const response = await fetch("http://localhost:5029/api/chat/GetResponse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({userMessage}),  
    });

    const data = await response.json();
    return data.response || "Sorry, I didn't understand that."; 
  } catch (error) {
    console.error("Error fetching chat response:", error);
    return "Server error. Please try again later.";
  }
};

export const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you?" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const botReply = await getChatResponse(userInput);
      setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    } catch (err) {
      setMessages(prev => [...prev, { sender: "bot", text: "Oops! Something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <ChatOutlinedIcon className="chatIcon" />
        <p>Chat</p>
      </button>

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Live Chat</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <p key={index} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
                {msg.text}
              </p>
            ))}
            {loading && <p className="bot-msg">Typing...</p>}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};
