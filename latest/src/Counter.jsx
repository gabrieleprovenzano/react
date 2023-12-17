import { useState } from "react"

export const Counter = ()=> {
    const [count , setCount]= useState(0)
    
    function HandleIncrementCounter() {
        setCount((el)=> el+1)
    }

    {/*function HandleDecrementCounter() {
        setCount((el)=>el-1)
    }

    function Reset() {
       setCount(0)
    }*/}
    return (
        <div>
            <h2>I have counted to {count}</h2>
            <button onClick={HandleIncrementCounter}>Increment</button>
            {/*<button onClick={HandleDecrementCounter}>Decrement</button>
            <button onClick={Reset}>Reset</button>*/}
        </div>
    )
}