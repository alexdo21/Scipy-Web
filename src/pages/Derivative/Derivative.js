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

    const [latex, setLatex] = React.useState(`\\(\\frac{\\mathrm{d}}{\\mathrm{d} ${wrt}} (${expr}) \\)`)
    const [derivativeResult, setDerivativeResult] = React.useState("")

    const updateLatex = () => {
        selectedType === "symbolic" ?
        setLatex(`\\(\\frac{\\mathrm{d}}{\\mathrm{d} ${wrt}} (${expr}) \\)`) : 
        setLatex(`\\(\\left. \\frac{\\mathrm{d} }{\\mathrm{d} ${wrt}} (${expr}) \\right\\vert_{${wrt}=${atValue}}\\)`)
    }

    const handleDerive = (event) => {
        event.preventDefault()
        selectedType === "symbolic" ?
        fetchSymbolicDerivative(expr, wrt)
        .then(response => setDerivativeResult(response))
        .catch(errMsg => setDerivativeResult(errMsg)) :
        fetchSolveDerivative(expr, wrt, atValue)
        .then(response => setDerivativeResult(response))
        .catch(errMsg => setDerivativeResult(errMsg))
    }

    return (
        <div className="content-page-wrapper">
            <div className="problem-wrapper">
                <div className="calculus-user-interface">
                    <ExpressionLabel latex={latex} />
                    <ControlPanel 
                        selectedPage="derivative" updateLatexCallback={() => updateLatex()}
                        selectedType={selectedType} setSelectedTypeCallback={(value) => {setSelectedType(value); updateLatex();}}
                        expr={expr} setExprCallback={(value) => {setExpr(value); updateLatex();}}
                        wrt={wrt} setWrtCallback={(value) => {setWrt(value); updateLatex();}}
                        atValue={atValue} setAtValueCallback={(value) => {setAtValue(value); updateLatex();}}
                    />
                    <SolveButton buttonTitle="Derive" handleSolveCallback={handleDerive} />
                </div>
            </div>
            <div className="solution-wrapper">
                <Solution derivativeResult={derivativeResult} />
            </div>
        </div>
    );
}

export { Derivative };