import React from 'react';
import "./MatrixEditor.css"

function MatrixEditor({rows, setRowsCallback, cols, setColsCallback, setProblemCallback}) {
    return (
        <div className="matrix-editor-wrapper">
            <div className="matrix-container">
                <div className="open-bracket" />
                <form id="matrix-form">
                    <div className="matrix">
                        {
                            [...Array(rows).keys()].map((rowTag) => 
                                <div key={rowTag} className="row">
                                    {
                                        [...Array(cols).keys()].map((colTag) => 
                                            <div key={colTag} className="entry">
                                                <input 
                                                    className="entry-input" placeholder="?" type="number" 
                                                    onWheel={(event) => event.target.blur()} title="must be number" 
                                                    onChange={setProblemCallback}
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </form>
                <div className="close-bracket" />
            </div>
            <div className="dimension-editor-container">
                <div className="dimension-editor">
                    <select className="selector" value={rows} onChange={setRowsCallback}>
                        {[...Array(5).keys()].map((value, index) => 
                            <option key={index} value={value + 1}>{value + 1}</option>
                        )}
                    </select>
                </div>
                <div className="cross">x</div>
                <div className="dimension-editor">
                    <select className="selector" value={cols} onChange={setColsCallback}>
                        {[...Array(5).keys()].map((value, index) => 
                            <option key={index} value={value + 1}>{value + 1}</option>
                        )}
                    </select>
                </div>
            </div>
        </div>
    );
}

export { MatrixEditor };