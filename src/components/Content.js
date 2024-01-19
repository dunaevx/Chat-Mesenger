import React from "react";
import contentAvatar from "../img/content/Vector (1).svg"

class Content extends React.Component {
    render (){
      return(
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
                <div className="content-message received">
                  <div className="content-bubble">Hello, this is John.</div>
                  <div className="content-time">12:30</div>
                </div>
                <div class="content-message sent">
                  <div class="content-bubble">Hi John, this is a demo of the UI UX web design for your messenger app.</div>
                  <div class="content-time">12:31</div>
                </div>
                <div class="content-message received">
                  <div class="content-bubble">Wow, this looks amazing! I love the design and the colors.</div>
                  <div class="content-time">12:32</div>
                </div>
                <div class="content-message sent">
                  <div class="content-bubble">Thank you, I'm glad you like it. 😊</div>
                  <div class="content-time">12:33</div>
                </div>
              </div>
              <div class="content-footer">
                <input type="text" className="content-input" placeholder="Type a message..." />
                <button className="content-button">
                  <svg className="content-button-icon" viewBox="0 0 24 24">
                    <path  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
      )
    }
  }
  
export default Content