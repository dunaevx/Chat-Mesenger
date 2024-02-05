import React, { useState, useEffect } from "react";
import contentAvatar from "../img/content/Vector (1).svg";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const Content = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessage] = useState('');
  const [nickname, setNickname] = useState('');
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/ws');
    const client = Stomp.over(socket);

    client.connect({}, () => {
      client.subscribe('/topic/messages', (message) => {
        const receivedMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      });
    });

    setStompClient(client);

    return () => {
      client.disconnect();
    };
  }, []);

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendMessage = () => {
    if (messageInput.trim()) {
      const chatMessage = {
        nickname,
        content: messageInput,
      };

      stompClient.send('/app/chat', {}, JSON.stringify(chatMessage));
      setMessage('');
    }
  };

  return (
    <div className="container">
      <div className="content">
        <div className="content-header">
          <div className="content-center">
            <div className="content-avatar"></div>
            <div className="content-name">
            International chat🤌🏿
              <div className="content-status">1 members</div>
            </div>
          </div>
          <img src={contentAvatar} alt="avatarchik" className="content-icon" />
        </div>
        <div className="content-body">
          {messages.map((msg, index) => (
            <div key={index} className={`content-message sent`}>
              <div className="content-bubble">{msg.content}</div>
              <div className="content-time">{msg.timestamp}</div>
            </div>
          ))}
        </div>
        <div className="content-footer">
          <input 
            type="text" 
            className="content-input" 
            placeholder="Type a message..." 
            value={messageInput} 
            onChange={handleMessageChange} 
          />
          <button className="content-button" onClick={sendMessage}>
            <svg className="content-button-icon" viewBox="0 0 24 24">
              <path  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
