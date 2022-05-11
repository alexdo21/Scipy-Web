import React from 'react';
import { MathJax } from "better-react-mathjax"
import "./ExpressionLabel.css"
function ExpressionLabel({selectedPage, selectedType, expr, wrt, atValue, from, to, setProblemCallback}) {
    const [latex, setLatex] = React.useState("")
    React.useEffect(() => {
        if (selectedPage === "derivative") {
            selectedType === "symbolic" ?
            setLatex(`\\(\\frac{\\mathrm{d}}{\\mathrm{d} ${wrt}} (${expr}) \\)`) :
            setLatex(`\\(\\left. \\frac{\\mathrm{d} }{\\mathrm{d} ${wrt}} (${expr}) \\right\\vert_{${wrt}=${atValue}}\\)`)
        } else if (selectedPage === "integral") {
            selectedType === "symbolic" ? 
            setLatex(`\\(\\int \\! (${expr}) \\, \\mathrm{d} ${wrt}\\)`) :
            setLatex(`\\(\\int_{${from}}^{${to}} \\! (${expr}) \\, \\mathrm{d} ${wrt}\\)`)
        }
        setProblemCallback(latex)
    }, [selectedPage, selectedType, expr, wrt, atValue, from, to, setProblemCallback, latex])

    return (
        <div className="expression-wrapper">
            <MathJax className="expression-label-latex" inline="true">{latex}</MathJax>
        </div>
    );
}

export { ExpressionLabel };