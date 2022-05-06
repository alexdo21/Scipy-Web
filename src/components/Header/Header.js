import React from 'react';

function Header(props) {
    return (
        <div>
            {!props.isSidebarOpen ? <button onClick={props.openSidebarCallback}>Open</button> : null}
            { props.title }
        </div>
    );
}

export { Header };