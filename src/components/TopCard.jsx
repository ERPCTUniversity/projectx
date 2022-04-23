import React from 'react' 
import { Sentry } from 'react-activity';
import './styles/TopCard.css'

function TopCard() {
    return ( 
        <div className="main">
            <div className="topcard"></div>

                <div className="active-users">
                <div className="loader"><Sentry /></div>
                <div className="container">
                <h4><b>Active Users</b></h4> 
                </div>
            </div>
        </div>
     );
}

export default TopCard;