import React from 'react';
import { MathJax } from "better-react-mathjax"
import "./ControlPanel.css"
function ControlPanel(props) {
    const [expression, setExpression] = React.useState("f(x)")
    const [wrt, setWrt] = React.useState("")
    const [atValue, setAtValue] = React.useState("")
    const [from, setFrom] = React.useState("")
    const [to, setTo] = React.useState("")


    const handleExpressionChange = (event) => setExpression(event.target.value)
    const handleWrtChange = (event) => setWrt(event.target.value)
    const handleAtValueChange = (event) => setAtValue(event.target.value)
    const handleFromChange = (event) => setFrom(event.target.value)
    const handleToChange = (event) => setTo(event.target.value)

    return (
        <div className="control-panel-wrapper">
            <div className="panel-row border-bottom selector">
                <input className="selector-checkbox" type="checkbox"/>
                <label className="selector-label" for="">
                    <span className="selector-label-span">Symbolic</span>
                </label>
            </div>
            <div className="panel-row border-bottom expression-editor"><input className="control-input" value={expression} onChange={handleExpressionChange} /></div>
            <div className="panel-row options-wrapper">
                <div className="option border-right wrt-editor"><input className="control-input" value={wrt} placeHolder="with respect to" onChange={handleWrtChange} /></div>
                <div className="option border-right atValueEditor"><input className="control-input" value={atValue} placeHolder="at value" onChange={handleAtValueChange} /></div>
                <div className="option border-right fromEditor"><input className="control-input" value={from} placeHolder="from" onChange={handleFromChange} /></div>
                <div className="option toEditor"><input className="control-input" value={to} placeHolder="to" onChange={handleToChange} /></div>
            </div>
        </div>
    );
}

export { ControlPanel };