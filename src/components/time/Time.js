import React, { useEffect, useState, useRef } from 'react'

function Time() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(t => t + 1)
            }, 1000)
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);


    const handleStartAndStop = () => {
        setIsRunning(!isRunning);
    }

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        clearInterval(intervalRef.current);
    }

    return (
        <>
            <h3> Time : {time} secondes</h3>
            <button onClick={handleStartAndStop}>
                {isRunning ? 'Stop' : 'Go !'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </>


    )
}

export default Time
