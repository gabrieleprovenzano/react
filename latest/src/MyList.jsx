import { useState } from "react"

export function MyListItem({item}) {
    const [counter , setCounter] = useState(0)

    function handleIncrementCounter() {
        setCounter((el)=> el + 1)
    }

    function Reset() {
        setCounter("")
    }
    return(
        <li key={item.id}>
            <h4>{item.name}{counter}</h4>
            <button onClick={handleIncrementCounter}>Increment</button>
            <button onClick={Reset}>Reset</button>
            <input type="text" value={counter}/>
        </li>
    )
}

export function MyList({items}) {

    return(
        <ul>
            {items.map((item)=>(
                <MyListItem item={item} />
            ))}
        </ul>
    )
}