import { useState } from "react"

export function MyListItem({item}) {
    const [counter , setCounter] = useState(0)

    function handleIncrementCounter() {
        setCounter((el)=> el+1)
    }
    return(
        <li key={item.id}>
            <h4>{item.name}</h4>
            <button onClick={handleIncrementCounter} >{counter}</button>
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