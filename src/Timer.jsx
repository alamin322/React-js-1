import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000)
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setCalculation(() => count * 2)
    }, [count]);

    return (
        <>
            <h3>Timer component</h3>
            <h3>I have rendered {count} times</h3>
            <h3>I have rendered {calculation} times</h3>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
        </>
    )
}

export default Timer;