import React from 'react';
import { fetchSymbolicDerivative, fetchSolveDerivative } from "../../services"
import { ExpressionLabel, ControlPanel, SolveButton, Solution } from "../../components"
import "./Derivative.css"

function Derivative({headerTitleCallback}) {
    headerTitleCallback("Calculus | Derivative")

    const [selectedType, setSelectedType] = React.useState("symbolic")
    
    const [expr, setExpr] = React.useState("f(x)")
    const [wrt, setWrt] = React.useState("x")
    const [atValue, setAtValue] = React.useState("")

    const [derivativeProblem, setDerivativeProblem] = React.useState("")
    const [derivativeResult, setDerivativeResult] = React.useState("")

    React.useEffect(() => {
        setDerivativeResult("")
    }, [expr, wrt, atValue])
    
    const handleDerive = (event) => {
        event.preventDefault()
        selectedType === "symbolic" ?
        fetchSymbolicDerivative(expr, wrt)
        .then(response => setDerivativeResult(response))
        .catch(errMsg => setDerivativeResult(errMsg)) :
        fetchSolveDerivative(expr, wrt, atValue)
        .then(response => setDerivativeResult(Number.parseFloat(response).toFixed(2).toString()))
        .catch(errMsg => setDerivativeResult(errMsg))
    }

    return (
        <div className="content-page-wrapper">
            <div className="problem-wrapper">
                <div className="user-interface">
                    <ExpressionLabel
                        selectedPage="derivative" selectedType={selectedType}
                        expr={expr} wrt={wrt} atValue={atValue}
                        setProblemCallback={(value) => setDerivativeProblem(value)}
                    />
                    <ControlPanel 
                        selectedPage="derivative"
                        selectedType={selectedType} setSelectedTypeCallback={(value) => setSelectedType(value)}
                        expr={expr} setExprCallback={(event) => setExpr(event.target.value)}
                        wrt={wrt} setWrtCallback={(event) => setWrt(event.target.value)}
                        atValue={atValue} setAtValueCallback={(event) => setAtValue(event.target.value)}
                    />
                    <SolveButton buttonTitle="Derive" handleSolveCallback={handleDerive} />
                </div>
            </div>
            <div className="solution-wrapper">
                <Solution problem={derivativeProblem} result={derivativeResult} />
            </div>
        </div>
    );
}

export { Derivative };