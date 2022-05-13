import React from 'react';
import { SegmentedControl } from '../';
import "./ControlPanel.css"
function ControlPanel({
    selectedPage,
    selectedType, setSelectedTypeCallback, 
    expr, setExprCallback, 
    wrt, setWrtCallback, 
    atValue, setAtValueCallback, 
    from, setFromCallback, 
    to, setToCallback}) {

    return (
        <div className="control-panel-wrapper">
            <div className="panel-row segmented-control">
                <SegmentedControl
                    name="calculus-segmented-control"
                    callback={setSelectedTypeCallback}
                    controlRef={React.useRef()}
                    defaultIndex={0}
                    items={[
                        {
                            label: "Symbolic",
                            value: "symbolic",
                            ref: React.useRef()
                        },
                        {
                            label: "Solve",
                            value: "solve",
                            ref: React.useRef()
                        }
                    ]}
                />
            </div>
            <div className="panel-row border-bottom expression-editor"><input className="control-input" value={expr} onChange={setExprCallback} /></div>
            <div className="panel-row options-wrapper">
                <div className={`option ${selectedType === "solve" ? "border-right" : null} wrt-editor`}>
                    <input 
                        className="control-input"
                        placeholder={`${selectedPage === "integral" && selectedType === "solve" ? "wrt" : "with respect to"}`}
                        onChange={setWrtCallback} 
                    />
                </div>
                {
                    selectedPage === "derivative" && selectedType === "solve" ?
                    <div className="option atValueEditor"><input className="control-input" placeholder="at value" onChange={setAtValueCallback} /></div> 
                    : null
                }
                {
                    selectedPage === "integral" && selectedType === "solve" ? 
                    <>
                        <div className="option border-right fromEditor"><input className="control-input" placeholder="from" onChange={setFromCallback} /></div>
                        <div className="option toEditor"><input className="control-input" placeholder="to" onChange={setToCallback} /></div>
                    </>
                    : null
                }
            </div>
        </div>
    );
}

export { ControlPanel };