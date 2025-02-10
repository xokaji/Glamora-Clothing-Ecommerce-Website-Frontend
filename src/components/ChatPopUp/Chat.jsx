import React, { useState } from "react";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import "./chat.css"

export const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-container">

      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <ChatOutlinedIcon className="chatIcon"/> 
        <p>Chat</p>
      </button>

     
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <span>Live Chat</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="chat-body">
            <p>Hi! How can I help you?</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Type a message" />
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};
