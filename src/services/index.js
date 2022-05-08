const BASE_URL = "http://192.168.0.109:8000";
const CALCULUS_ENDPOINT = BASE_URL + "/calculus";
const LINEAR_ALGEBRA_ENDPOINT = BASE_URL + "/linalg";
const CORS_HEADERS = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
};
const REQUEST = {
    method: "POST",
    headers: CORS_HEADERS
}

export { CALCULUS_ENDPOINT, LINEAR_ALGEBRA_ENDPOINT, REQUEST }
export { fetchSymbolicDerivative, fetchSolveDerivative, fetchSymbolicIntegral, fetchSolveIntegral } from "./Calculus"