import React from 'react'
import { useNavigate } from 'react-router-dom';


import "./Home.css"
import Menu from "../../components/Menu/Menu"
import ChatBot  from "../../components/ChatBot/Chatbot"

const Home = () => {
  
  const loggedIn = true;
  const navigate = useNavigate()
  
  return (
    <div>
      { loggedIn ? (
        <div className='home-main-container'>
          <div className='menu-bar'>
              <Menu/>
            </div>
            <div className="chatbot-side">
              <ChatBot/>
            </div>
        </div>
      ):(
        navigate("/Auth")
      )}
      
      
    </div>
  )
}

export default Home
