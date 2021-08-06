import React, { useState, useEffect } from 'react'

const BasicUseEffect = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState('');

    useEffect(() => {
        console.log("useEffect invoked!!");
    }, [count])


    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count}</button>
            <input value={item} onChange={(e) => setItem(e.target.value)} />
        </div>
    )
}

export default BasicUseEffect
