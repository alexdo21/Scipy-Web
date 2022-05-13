import React from 'react';
import { MathJax } from "better-react-mathjax"
import "./Solution.css"

function Solution({problem, result}) {
    return (
        <div className="solution-container">
            <div className="solution-label">SOLUTION</div>
            <div className="solution-display-box">
                {
                    result === "" ? null : 
                    <>
                        <div className="display problem-expr">
                            <MathJax inline="true" style={{fontSize: `${problem.length > 70 || result.length > 70 ? 100 : 200}%`}}>{problem}</MathJax>
                        </div>
                        <div className="display arrow-wrapper">
                            <div className="arrow">
                                <div className="line"></div>
                                <div className="point"></div>
                            </div>
                        </div>
                        <div className="display solution-result">
                            <MathJax inline="true" style={{fontSize: `${problem.length > 70 || result.length > 70 ? 100 : 200}%`}}>{`\\(${result}\\)`}</MathJax>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export { Solution };