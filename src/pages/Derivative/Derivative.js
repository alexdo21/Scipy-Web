import React from 'react';
import { fetchSymbolicDerivative } from "../../services"
import { ExpressionLabel, ControlPanel, SolveButton, Solution } from "../../components"
import "./Derivative.css"

function Derivative(props) {
    props.headerTitleCallback("Calculus | Derivative")
    const [functionInput, setFunctionInput] = React.useState("")
    const [derivativeResult, setDerivativeResult] = React.useState("")

    const handleChange = (event) => setFunctionInput(event.target.value)
    const handleSubmit = (event) => {
        event.preventDefault()
        fetchSymbolicDerivative(functionInput, "x")
        .then(response => setDerivativeResult(response))
        .catch(errMsg => setDerivativeResult(errMsg))
    }

    return (
        <div className="content-page-wrapper">
            <div className="problem-wrapper">
                <div className="calculus-user-interface">
                    <ExpressionLabel />
                    <ControlPanel />
                    <SolveButton />
                </div>
            </div>
            <div className="solution-wrapper">
                <Solution />
            </div>
        </div>
    );
}

/* <form onSubmit={handleSubmit}>
<input type="text" value={functionInput} onChange={handleChange} />
<input type="submit" value="Submit" />
</form>
<textarea value={derivativeResult}></textarea> */

export { Derivative };