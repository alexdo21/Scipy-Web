import React from 'react';
import { fetchMatrixInverse, getValidSquareMatrixFromEditor, getMatrixLatex } from "../../services"
import { MatrixEditor, SolveButton, Solution } from "../../components"

function Inverse({headerTitleCallback}) {
    headerTitleCallback("Linear Algebra | Inverse of Matrix")
    
    const [rows, setRows] = React.useState(3)
    const [cols, setCols] = React.useState(3)

    const [inverseProblem, setInverseProblem] = React.useState("")
    const [inverseResult, setInverseResult] = React.useState("")

    React.useEffect(() => {
        setInverseResult("")
    }, [rows, cols])

    const handleInverse = (event) => {
        event.preventDefault()
        let matrix = getValidSquareMatrixFromEditor(rows, cols)
        if (matrix) {
            let matrixLatex = getMatrixLatex(matrix)
            setInverseProblem(matrixLatex)
            fetchMatrixInverse(matrix)
            .then(response => setInverseResult(getMatrixLatex(response)))
            .catch(errMsg => setInverseResult(errMsg))
        }
    }

    return (
        <div className="content-page-wrapper">
            <div className="problem-wrapper">
                <div className="user-interface" style={{gap: "10px", paddingTop: "170px"}}>
                <MatrixEditor 
                    rows={rows} setRowsCallback={(event) => setRows(Number(event.target.value))}
                    cols={cols} setColsCallback={(event) => setCols(Number(event.target.value))}
                    setProblemCallback={() => setInverseResult("")}
                />
                <SolveButton buttonTitle="Invert" handleSolveCallback={handleInverse} />
                </div>
            </div>
            <div className="solution-wrapper">
                <Solution problem={inverseProblem} result={inverseResult} />
            </div>
        </div>
    );
}

export { Inverse };