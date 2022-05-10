import React, { useEffect } from 'react';
import "./SegmentedControl.css"

function SegmentedControl({name, callback, controlRef, defaultIndex=0, items}) {
    const [activeIndex, setActiveIndex] = React.useState(defaultIndex)
    const componentReady = React.useRef()

    useEffect(() => {componentReady.current = true;}, [])
    useEffect(() => {
        const activeSegmentRef = items[activeIndex].ref
        const { offsetWidth, offsetLeft } = activeSegmentRef.current
        const { style } = controlRef.current

        style.setProperty("--highlight-width", `${offsetWidth}px`)
        style.setProperty("--highlight-x-pos", `${offsetLeft}px`)
    }, [activeIndex, callback, controlRef, items])

    const onInputChange = (value, index) => {
        setActiveIndex(index)
        callback(value, index)
    }

    return (
        <div className="segmented-control-wrapper" ref={controlRef}>
            <div className={`segments ${componentReady.current ? "ready" : "idle"}`}>
                {items.map((item, index) => (
                    <div key={item.value} className={`segment ${index === activeIndex ? "active" : "inactive"}`} ref={item.ref}>
                        <input 
                            type="radio"
                            value={item.value}
                            id={item.label}
                            name={name}
                            onChange={() => onInputChange(item.value, index)}
                            checked={index === activeIndex}
                        />
                        <label htmlFor={item.label}>{item.label}</label>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export { SegmentedControl };