import React from 'react';
import { MathJax } from "better-react-mathjax"
import "./ExpressionLabel.css"
function ExpressionLabel({latex}) {
    return (
        <div className="expression-wrapper">
            <MathJax className="expression-label-latex">{latex}</MathJax>
            {/* \\(frac{\\mathrm{d} }{\\mathrm{d}\\) */}
        </div>
    );
}

export { ExpressionLabel };