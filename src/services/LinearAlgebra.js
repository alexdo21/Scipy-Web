import { LINEAR_ALGEBRA_ENDPOINT, REQUEST } from "."

const fetchMatrixDeterminant = (matrix) => {
    return new Promise((resolve, reject) => {
        REQUEST.body = JSON.stringify({matrix: matrix})
        fetch(`${LINEAR_ALGEBRA_ENDPOINT}/determinant`, REQUEST)
        .then(response => response.ok ? response.json() : reject("Internal\\,API\\,server\\,error"))
        .then(data => resolve(data.determinant))
        .catch(() => reject("Error\\,fetching\\,symbolic\\,derivative"))
    })
}

const fetchMatrixInverse = (matrix) => {
    return new Promise((resolve, reject) => {
        REQUEST.body = JSON.stringify({matrix: matrix})
        fetch(`${LINEAR_ALGEBRA_ENDPOINT}/inverse`, REQUEST)
        .then(response => response.ok ? response.json() : reject("Internal\\,API\\,server\\,error"))
        .then(data => resolve(data.inverseMatrix))
        .catch(() => reject("Error\\,fetching\\,symbolic\\,derivative"))
    })
}

const getValidSquareMatrixFromEditor = (rows, cols) => {
    if (rows !== cols) {
        alert("Matrix has to be square")
        return
    }
    let inputs = document.querySelectorAll("#matrix-form input")
    let matrix = [...Array(rows)].map(x => Array(cols).fill(0))
    for (let i = 0; i < rows * cols; i++) {
        let entry = inputs[i]
        if (!(entry && entry.value)) {
            alert("All matrix entries have be filled and be integers")
            return
        }
        matrix[Math.floor(i / rows)][i % rows] = Number(entry.value).toFixed(2)
    }
    return matrix
}

const getMatrixLatex = (matrix) => {
    let openTag = "\\begin{bmatrix}"
    let closeTag = "\\end{bmatrix}"
    let rows = []
    for (let i = 0; i < matrix.length; i++) {
        let entries = []
        for (let j = 0; j < matrix[i].length; j++) {
            entries.push(Number(matrix[i][j]).toFixed(2).toString())
        }
        rows.push(entries.join("&"))
    }
    return openTag + rows.join("\\\\") + closeTag
}

export { fetchMatrixDeterminant, fetchMatrixInverse, getValidSquareMatrixFromEditor, getMatrixLatex }