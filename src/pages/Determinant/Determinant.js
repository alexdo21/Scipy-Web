import React from 'react';
import "./Determinant.css"

function Child1({count}) {
    return (
        <div className="child1">
            Child1 = {count}
        </div>
    );
}

function Child2({count, countCallback}) {
    return (
        <div className="child2">
            Child2 = {count}
            <GrandChild2 count={count} countCallback={countCallback}/>
        </div>
    );
}

function GrandChild2({count, countCallback}) {
    return (
        <div className="grandChild2">
            GrandChild2 = {count}
            <button onClick={countCallback}>+1</button>
        </div>
    );
}

function Determinant(props) {
    props.headerTitleCallback("Linear Algebra | Determinant of Matrix")
    
    const [count, setCount] = React.useState(0)

    return (
        <div className="parent">
            <Child1 count={count}/>
            <Child2 count={count} countCallback={() => setCount(count + 1)}/>
        </div>
    );
}

export { Determinant };