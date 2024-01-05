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
    <input name="session" type="checkbox" value={data.session} onChange={handleInputChange} />
    <button onClick={handleResetForm}>Reset</button>
    </div>
    )
}