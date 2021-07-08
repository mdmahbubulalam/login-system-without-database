import React from 'react';
import './Welcome.css';

const Wellcome = (props) => {
    const userName =  props.user.name;
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 welcome">
                    <div className="welcome-div">
                        <h1>Welcome, <span className="userNameText">{userName}</span></h1> 
                        <button type="button" className="logout-button" onClick={props.handleLogout}>Logout</button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Wellcome;