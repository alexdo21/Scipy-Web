import React from 'react';
import { fetchSymbolicIntegral, fetchSolveIntegral } from '../../services';
import { ExpressionLabel, ControlPanel, SolveButton, Solution } from '../../components';
import "./Integral.css"

function Integral({headerTitleCallback}) {
    headerTitleCallback("Calculus | Integral")

    const [selectedType, setSelectedType] = React.useState("symbolic")

    const [expr, setExpr] = React.useState("f(x)")
    const [wrt, setWrt] = React.useState("x")
    const [from, setFrom] = React.useState("a")
    const [to, setTo] = React.useState("b")

    const [latex, setLatex] = React.useState()
    const [integralResult, setIntegralResult] = React.useState("")

    const updateLatex = () => {
        selectedType === "symbolic" ?
        setLatex(`\\(\\int \\! (${expr}) \\, \\mathrm{d} ${wrt}\\)`) : 
        setLatex(`\\(\\int_{${from}}^{${to}} \\! (${expr}) \\, \\mathrm{d} ${wrt}\\)`)
    }

    const handleIntegrate = (event) => {
        event.preventDefault()
        selectedType === "symbolic" ?
        fetchSymbolicIntegral(expr, wrt)
        .then(response => setIntegralResult(response))
        .catch(errMsg => setIntegralResult(errMsg)) :
        fetchSolveIntegral(expr, wrt, from, to)
        .then(response => setIntegralResult(response))
        .catch(errMsg => setIntegralResult(errMsg))
    }

    return (
        <div className="content-page-wrapper">
            <div className="problem-wrapper">
                <div className="calculus-user-interface">
                    <ExpressionLabel latex={latex} />
                    <ControlPanel 
                        selectedPage="integral"
                        selectedType={selectedType} setSelectedTypeCallback={(value) => {setSelectedType(value); updateLatex()}}
                        expr={expr} setExprCallback={(value) => {setExpr(value); updateLatex()}}
                        wrt={wrt} setWrtCallback={(value) => {setWrt(value); updateLatex()}}
                        from={from} setFromCallback={(value) => {setFrom(value); updateLatex()}}
                        to={to} setToCallback={(value) => {setTo(value); updateLatex();}}
                    />
                    <SolveButton buttonTitle="Integrate" handleSolveCallback={handleIntegrate} />
                </div>
            </div>
            <div className="solution-wrapper">
                <Solution integralResult={integralResult} />
            </div>
        </div>
    );
}

export { Integral };