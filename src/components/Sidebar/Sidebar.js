import { Link } from "react-router-dom"
import "./Sidebar.css"

function Sidebar(props) {
    return (
        <nav id="sidebar">
            <button onClick={props.closeSidebarCallback}>x</button>
            <ul>
                <li>
                    <Link to="/calculus/derivative">Derivative</Link>
                </li>
                <li>
                    <Link to="/calculus/integral">Integral</Link>
                </li>
                <li>
                    <Link to="/linalg/determinant">Determinant</Link>
                </li>
                <li>
                    <Link to="/linalg/inverse">Inverse</Link>
                </li>
            </ul>
        </nav>
    );
}

export { Sidebar };