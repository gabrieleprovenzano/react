import { useState } from "react"

 function useCounter({initialValue = 0}) {
    const[counter , setCounter] = useState(initialValue)

    function handleIncrement() {
        setCounter((el)=> el + 1)
    }

    function handleDecrement() {
        setCounter((el) => el - 1)
    }

    function reset() {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: reset
    }
}

export function HookCounter({initialValue = 0}) {
    const {counter , onIncrement , onDecrement , onReset} = useCounter(initialValue)

       return(
        <div>
            <h2>Counter: {counter}</h2>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
        </div>
       )
}