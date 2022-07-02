import React from 'react';
import { fetchMatrixDeterminant, getValidSquareMatrixFromEditor, getMatrixLatex } from "../../services"
import { MatrixEditor, SolveButton, Solution } from "../../components"
import "./Determinant.css"

function Determinant({headerTitleCallback}) {
    headerTitleCallback("Linear Algebra | Determinant of Matrix")

    const [rows, setRows] = React.useState(3)
    const [cols, setCols] = React.useState(3)
    
    const [determinantProblem, setDeterminantProblem] = React.useState("")
    const [determinantResult, setDeterminantResult] = React.useState("")

    React.useEffect(() => {
        setDeterminantResult("")
    }, [rows, cols])

    const handleDetermine = (event) => {
        event.preventDefault()
        let matrix = getValidSquareMatrixFromEditor(rows, cols)
        if (matrix) {
            let matrixLatex = getMatrixLatex(matrix)
            setDeterminantProblem(matrixLatex)
            fetchMatrixDeterminant(matrix)
            .then(response => setDeterminantResult(Number.parseFloat(response).toFixed(2).toString()))
            .catch(errMsg => setDeterminantResult(errMsg))
        }
    }

    return (
        <div className="content-page-wrapper">
            <div className="problem-wrapper">
                <div className="user-interface" style={{gap: "10px", paddingTop: "170px"}}>
                    <MatrixEditor 
                        rows={rows} setRowsCallback={(event) => setRows(Number(event.target.value))}
                        cols={cols} setColsCallback={(event) => setCols(Number(event.target.value))}
                        setProblemCallback={() => setDeterminantResult("")}
                    />
                    <SolveButton buttonTitle="Determine" handleSolveCallback={handleDetermine} />
                </div>
            </div>
            <div className="solution-wrapper">  
                <Solution problem={determinantProblem} result={determinantResult} />
            </div>
        </div>
    );
}

export { Determinant };