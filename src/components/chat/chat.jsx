import { useState } from "react";
import "./chat.scss";

const chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet </p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="" alt="" />
              Mike Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage own">
              <p>Lorem ipsum dolor, sit </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor, sit </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor, sit </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor, sit </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor, sit </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage ">
              <p>Lorem ipsum dolor, sit </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor, sit </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor, sit </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor, sit </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default chat;
