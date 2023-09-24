import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    // useEffect replaces the componentDidMount and componentDidUpdate in class based components
    // useEffect runs the function you give it after evey render
    useEffect(() => {
        document.title = count;
    });
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
        </div>
    )
}

export default UseEffectCounter