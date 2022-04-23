import React from 'react'
import { Sentry } from 'react-activity';
import './styles/Cards.css'
import "react-activity/dist/library.css";
function Cards() {
    return (  
        <div className="card">
        <div className="loader"><Sentry /></div>
        <div className="container">
            <h4><b>Daily Active Users</b></h4> 
        </div>
        </div>
         );
}

export default Cards;