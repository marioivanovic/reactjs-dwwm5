import React, { useRef } from 'react'

import './inputRef.css'

function InputRef() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    }
    return (
        <>
            <input ref={inputRef} type="text" name="" placeholder="Write your text here...." />

            <button onClick={handleFocus}> Focus me !</button>
        </>

    )
}

export default InputRef
