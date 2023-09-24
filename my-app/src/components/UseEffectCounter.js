import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    // useEffect replaces the componentDidMount and componentDidUpdate in class based components
    // useEffect runs the function you give it after evey render
    useEffect(() => {
        console.log('Count 1 effect');
        document.title = count;
    }, [count]);
    // when using useEffect hook, you should nearly always specify the secound parameter. I.e [count2]..
    // which is the state property that will only run the useEffect when the state changes
    // if you remove the second parameter, calling the increment count 1 button will also call the useEffect for count2
    // const [count2, setCount2] = useState(0);
    // useEffect(() => {
    //     console.log('Count 2 effect');
    //     document.title = count;
    // }, [count2]);

    useEffect(() => {
        console.log('Creating timer');
        const interval = setInterval(() => {
            console.log('Interval executed')
            setTime(time => time + 1)
        }, 1000);
        // this return mimics the componentWillUnmout in class based components
        return () => {
            console.log('Cleaning up!')
            // clean up function passing the clearInterval function the interval we wish to clear i.e interval
            clearInterval(interval);
        }
        // passing a empty array as a second paramenter only runs the useEffect method once
    }, []);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count 1 ({count})
            </button>
            <h2>Time is {time}</h2>
            {/* <button onClick={
                () => setCount2(count2 => count2 + 1)
            }>
                Increment Count 2 ({count2})
            </button> */}
        </div>
    )
}

export default UseEffectCounter