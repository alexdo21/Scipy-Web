import React from 'react';
import "./LandingPage.css"
function LandingPage(props) {
    props.headerTitleCallback("")

    return (
        <div id="welcome-message-wrapper">
            welcome to scipy
        </div>
    );
}

export { LandingPage };