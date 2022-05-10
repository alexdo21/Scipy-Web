import React from 'react';
import "./LandingPage.css"
function LandingPage({headerTitleCallback}) {
    headerTitleCallback("")

    return (
        <div id="welcome-message-wrapper">
            welcome to scipy
        </div>
    );
}

export { LandingPage };