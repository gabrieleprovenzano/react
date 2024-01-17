import { useState } from "react";

export function FormLi() {
    const [data , setData] = useState("")
    const [arr , setArr] = useState([])

function handleOnChange(event) {
    const value = event.target.value 
}

function handlingAddLi() {
    
}

    return (
        <form>
            <input onChange={handleOnChange} />
            <button>Add</button>
            <button type="reset">Reset</button>
            <ul>
                <li name="li"></li>
            </ul>
        </form>
    )
}