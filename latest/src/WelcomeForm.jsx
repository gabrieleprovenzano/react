import { useState } from "react"

export function WelcomeForm() {
    const [data, setData] = useState({
        username:"",
        password:"",
        session:""
    })

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    function handleResetForm(){
        setData({
            username:"",
            password:"",
            session: false
        })
    }
    return( 
    <div>
        <h1>My form</h1>
    <input name= "username" value={data.username} onChange={handleInputChange} />
    <input name= "password" type="password" value={data.password} onChange={handleInputChange} />
    <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
    <button onClick={handleResetForm}>Reset</button>
    <button disabled= {!data.username || !data.password} onClick={handleResetForm}>Login</button>
    </div>
    )
}