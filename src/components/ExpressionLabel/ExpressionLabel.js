import React from 'react';
import { MathJax } from "better-react-mathjax"
import "./ExpressionLabel.css"
function ExpressionLabel(props) {
    return (
        <div className="expression-wrapper">
            <MathJax className="expression-label-latex">{"\\(\\frac{\\mathrm{d}}{\\mathrm{d} x} f(x) \\)"}</MathJax>
            {/* \\(frac{\\mathrm{d} }{\\mathrm{d}\\) */}
        </div>
    );
}

export { ExpressionLabel };