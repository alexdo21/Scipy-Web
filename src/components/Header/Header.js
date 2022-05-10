import React from 'react';
import { MenuIcon } from "../"
import "./Header.css"

function Header({isSidebarOpen, openSidebarCallback, title}) {
    return (
        <div id="header-wrapper" style={title === "" ? {border: "none"} : {borderBottom: "3px solid #97c3c3"}}>
            {!isSidebarOpen ? <button id="sidebar-open-button" onClick={openSidebarCallback}><MenuIcon /></button> : <div></div>}
            <div id="header-title">
                { title }
            </div>
            <div></div>
        </div>
    );
}

export { Header };