import React from 'react';
import "./SolveButton.css"

function SolveButton(props) {
    return (
        <div className="solve-button-wrapper">
            <button className="solve-button">Derive</button>
        </div>
    );
}

export { SolveButton };