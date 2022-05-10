import React from 'react';
import "./SolveButton.css"

function SolveButton({buttonTitle, handleSolveCallback}) {
    return (
        <div className="solve-button-wrapper">
            <button className="solve-button" onClick={handleSolveCallback}>{buttonTitle}</button>
        </div>
    );
}

export { SolveButton };