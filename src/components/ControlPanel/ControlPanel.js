import React from 'react';

function ControlPanel(props) {
    return (
        <div className="control-panel">
            <div className="selector">Selector</div>
            <div className="expression-editor">Expression Editor</div>
            <div className="options-wrapper">
                <div className="wrt-editor">WRT</div>
                <div className="atValueEditor">At Value</div>
            </div>
        </div>
    );
}

export { ControlPanel };