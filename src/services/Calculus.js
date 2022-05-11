
import { CALCULUS_ENDPOINT, REQUEST } from "."

const fetchSymbolicDerivative = (expression, wrt) => {
    return new Promise((resolve, reject) => {
        REQUEST.body = JSON.stringify({expression: expression, wrt: wrt})
        fetch(`${CALCULUS_ENDPOINT}/symbolic-derivative`, REQUEST)
        .then(response => response.ok ? response.json() : reject("Internal API server error"))
        .then(data => resolve(data.symbolicDerivative))
        .catch(() => reject("Error fetching symbolic derivative"))
    })
}

const fetchSolveDerivative = (expression, wrt, atValue) => {
    return new Promise((resolve, reject) => {
        REQUEST.body = JSON.stringify({expression: expression, wrt: wrt, atValue: atValue})
        fetch(`${CALCULUS_ENDPOINT}/solve-derivative`, REQUEST)
        .then(response => response.ok ? response.json() : reject("Internal API server error"))
        .then(data => resolve(data.derivativeResult))
        .catch(() => reject("Error fetching solve derivative"))
    })
}

const fetchSymbolicIntegral = (expression, wrt) => {
    return new Promise((resolve, reject) => {
        REQUEST.body = JSON.stringify({expression: expression, wrt: wrt})
        fetch(`${CALCULUS_ENDPOINT}/symbolic-integral`, REQUEST)
        .then(response => response.ok ? response.json() : reject("Internal API server error"))
        .then(data => resolve(data.symbolicIntegral))
        .catch(() => reject("Error fetching symbolic integral"))
    })
}

const fetchSolveIntegral = (expression, wrt, from, to) => {
    return new Promise((resolve, reject) => {
        REQUEST.body = JSON.stringify({expression: expression, wrt: wrt, from: from, to: to})
        fetch(`${CALCULUS_ENDPOINT}/solve-integral`, REQUEST)
        .then(response => response.ok ? response.json() : reject("Internal API server error"))
        .then(data => resolve(data.integralResult))
        .catch(() => reject("Error fetching solve integral"))
    })
}

export { fetchSymbolicDerivative, fetchSolveDerivative, fetchSymbolicIntegral, fetchSolveIntegral }