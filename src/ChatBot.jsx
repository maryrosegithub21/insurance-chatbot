
import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [options, setOptions] = useState([]);
  const [optionsType, setOptionsType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;
    const newMessages = [...messages, { sender: 'Me', text: userInput }];
    setMessages(newMessages);
    setUserInput('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ai-response`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages([...newMessages, { sender: 'Tina', text: data.reply }]);
      setOptions(data.options || []);
      setOptionsType(data.optionsType || '');
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages([...newMessages, { sender: 'Tina', text: 'Sorry, there was an error processing your request.' }]);
    }
  };

  const handleOptionClick = async (option) => {
    const newMessages = [...messages, { sender: 'Me', text: option.text }];
    setMessages(newMessages);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/ai-response`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: option.value }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages([...newMessages, { sender: 'Tina', text: data.reply }]);
      setOptions(data.options || []);
      setOptionsType(data.optionsType || '');
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages([...newMessages, { sender: 'Tina', text: 'Sorry, there was an error processing your request.' }]);
    }
  };

  return (
    <div className="chat-container">
      <h2>Tina – your AI insurance policy assistant</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      {optionsType === 'buttons' && (
        <div className="options">
          {options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)}>
              {option.text}
            </button>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChatBot;