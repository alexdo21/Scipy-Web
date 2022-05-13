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

    const [integralProblem, setIntegralProblem] = React.useState("")
    const [integralResult, setIntegralResult] = React.useState("")

    React.useEffect(() => {
        setIntegralResult("")
    }, [expr, wrt, from, to])

    const handleIntegrate = (event) => {
        event.preventDefault()
        selectedType === "symbolic" ?
        fetchSymbolicIntegral(expr, wrt)
        .then(response => setIntegralResult(response))
        .catch(errMsg => setIntegralResult(errMsg)) :
        fetchSolveIntegral(expr, wrt, from, to)
        .then(response => setIntegralResult(Number.parseFloat(response).toFixed(2).toString()))
        .catch(errMsg => setIntegralResult(errMsg))
    }

    return (
        <div className="content-page-wrapper">
            <div className="problem-wrapper">
                <div className="user-interface">
                    <ExpressionLabel
                        selectedPage="integral" selectedType={selectedType}
                        expr={expr} wrt={wrt} from={from} to={to}
                        setProblemCallback={(value) => setIntegralProblem(value)}
                    />
                    <ControlPanel 
                        selectedPage="integral"
                        selectedType={selectedType} setSelectedTypeCallback={(value) => setSelectedType(value)}
                        expr={expr} setExprCallback={(event) => setExpr(event.target.value)}
                        wrt={wrt} setWrtCallback={(event) => setWrt(event.target.value)}
                        from={from} setFromCallback={(event) => setFrom(event.target.value)}
                        to={to} setToCallback={(event) => setTo(event.target.value)}
                    />
                    <SolveButton buttonTitle="Integrate" handleSolveCallback={handleIntegrate} />
                </div>
            </div>
            <div className="solution-wrapper">
                <Solution problem={integralProblem} result={integralResult} />
            </div>
        </div>
    );
}

export { Integral };