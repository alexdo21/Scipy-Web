import React from 'react';
import { MenuIcon } from "../"
import "./Header.css"

function Header(props) {
    return (
        <div id="header-wrapper">
            {!props.isSidebarOpen ? <button id="sidebar-open-button" onClick={props.openSidebarCallback}><MenuIcon /></button> : <div></div>}
            <div id="header-title">
                { props.title }
            </div>
            <div></div>
        </div>
    );
}

export { Header };