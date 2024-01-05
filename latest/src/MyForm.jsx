import { useState } from "react"

export function MyForm() {
    const [data, setData] = useState({
        username:"",
        password:""
    })

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value

        setData((data) => {
            return {
                ...data,
                [name]:value
            }
        })
    }

    function handleResetForm(){
        setData({
            username:"",
            password:""
        })
    }
    return( 
    <div>
        <h1>My form</h1>
    <input name= "username" value={data.username} onChange={handleInputChange} />
    <input name= "password" type="password" value={data.password} onChange={handleInputChange} />
    <button disabled= {!data.username || !data.password} onClick={handleResetForm}>Login</button>
    <button onClick={handleResetForm}>Reset</button>
    <pre>
        {JSON.stringify(data , null , 2)}
    </pre>
    </div>
    )
}

