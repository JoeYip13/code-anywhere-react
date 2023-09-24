import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    // useEffect replaces the componentDidMount and componentDidUpdate in class based components
    // useEffect runs the function you give it after evey render
    useEffect(() => {
        console.log('Count 1 effect');
        document.title = count;
    }, [count]);
    // when using useEffect hook, you should nearly always specify the secound parameter. I.e [count2]..
    // which is the state property that will only run the useEffect when the state changes
    // if you remove the second parameter, calling the increment count 1 button will also call the useEffect for count2
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        console.log('Count 2 effect');
        document.title = count;
    }, [count2]);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count 1 ({count})
            </button>
            <button onClick={
                () => setCount2(count2 => count2 + 1)
            }>
                Increment Count 2 ({count2})
            </button>
        </div>
    )
}

export default UseEffectCounter