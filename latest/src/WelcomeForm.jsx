import { useState } from "react"

export function WelcomeForm() {
    const [username, setUsername] = useState("")

    function handleInputChange(event) {
        setUsername(event.target.value)
    }

    return(
        <div>
            <h3>Welcome, <input name="username" value={username} onChange={handleInputChange} /></h3>
        </div>
    )
}