import React from 'react'

import "./ChatBot.css"

const Chatbot = () => {
  return (
    <div className='chatbot-main-container'>
      <h3>This is ChatBot side</h3>
      <div className='message-container'>
        <div className='user-message-container'>
          <p>Hellow this is user message</p>
        </div>
        <div className='ai-message-container'>
          <p>Hello User this AI Speaking</p>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
