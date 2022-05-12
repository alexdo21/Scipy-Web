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
                            <MathJax className="latex" inline="true">{problem}</MathJax>
                        </div>
                        <div className="display arrow-wrapper" style={{paddingLeft: "5px"}}>
                            <div className="arrow">
                                <div className="line"></div>
                                <div className="point"></div>
                            </div>
                        </div>
                        <div className="display solution-result">
                            <MathJax className="latex" inline="true">{`\\(${result}\\)`}</MathJax>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export { Solution };