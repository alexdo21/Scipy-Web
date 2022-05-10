import React from 'react';
import { MathJax } from "better-react-mathjax"
import { SegmentedControl } from '../';
import "./ControlPanel.css"
function ControlPanel({
    selectedPage, updateLatexCallback,
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
                    callback={(value) => {setSelectedTypeCallback(value); updateLatexCallback();}}
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
            <div className="panel-row border-bottom expression-editor"><input className="control-input" value={expr} onChange={(event) => setExprCallback(event.target.value)} /></div>
            <div className="panel-row options-wrapper">
                <div className={`option ${selectedType === "solve" ? "border-right" : null} wrt-editor`}>
                    <input 
                        className="control-input"
                        value={wrt}
                        placeholder={`${selectedPage === "integral" && selectedType === "solve" ? "wrt" : "with respect to"}`}
                        onChange={(event) => setWrtCallback(event.target.value)} 
                    />
                </div>
                {
                    selectedPage === "derivative" && selectedType === "solve" ?
                    <div className="option atValueEditor"><input className="control-input" value={atValue} placeholder="at value" onChange={(event) => setAtValueCallback(event.target.value)} /></div> 
                    : null
                }
                {
                    selectedPage === "integral" && selectedType === "solve" ? 
                    <>
                        <div className="option border-right fromEditor"><input className="control-input" value={from} placeholder="from" onChange={(event) => setFromCallback(event.target.value)} /></div>
                        <div className="option toEditor"><input className="control-input" value={to} placeholder="to" onChange={(event) => setToCallback(event.target.value)} /></div>
                    </>
                    : null
                }
            </div>
        </div>
    );
}

export { ControlPanel };