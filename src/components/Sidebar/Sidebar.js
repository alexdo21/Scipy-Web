import { Link } from "react-router-dom"
import "./Sidebar.css"
import React from 'react';

function Sidebar({closeSidebarCallback}) {
    return (
        <nav id="sidebar">
            <div id="sidebar-content">
                <div id="sidebar-close-button-wrapper">
                    <button id="sidebar-close-button" onClick={closeSidebarCallback}>X</button>
                </div>
                <ul id="sidebar-menu">
                    <SidebarMenuItem
                        name={"Calculus"}
                        functions={[
                            {
                                name: "Derivative",
                                route: "/calculus/derivative"
                            },
                            {
                                name: "Integral",
                                route: "/calculus/integral"
                            }
                        ]}
                    />
                    <SidebarMenuItem
                        name={"Linear Algebra"}
                        functions={[
                            {
                                name: "Determinant",
                                route: "/linalg/determinant"
                            },
                            {
                                name: "Inverse",
                                route: "/linalg/inverse"
                            }
                        ]}
                    />
                </ul>
            </div>
        </nav>
    );
}

function SidebarMenuItem({name, functions}) {
    const [expanded, setExpanded] = React.useState(false)
    const contentElement = React.useRef()
    const handleToggleExpandableMenu = () => setExpanded((prevState) => !prevState)

    return (
        <li className="sidebar-menu-item">
            <button className="expand-button" onClick={handleToggleExpandableMenu}>
                {name}
                {expanded ? 
                <span className="expand-button-toggle-open">{"\u2304"}</span> :
                <span className="expand-button-toggle-close">{"\u203A"}</span>
                }
            </button>
            <ul ref={contentElement} className="expandable-menu" style={expanded ? {height: contentElement.current.scrollHeight} : {height: "0px"}}>
                {functions.map((func, index) => 
                    <li key={index} className="expandable-menu-cell">
                        <Link className="expandable-menu-cell-link" to={func.route}>{func.name}</Link>
                    </li>
                )}
            </ul>
        </li>
    );
}

export { Sidebar };