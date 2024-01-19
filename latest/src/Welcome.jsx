import { Link, useNavigate, useParams } from "react-router-dom"
import "./layout.scss"

export function Welcome() {
    
    const { name } =useParams()
    const Navigate = useNavigate()

function handleClick() {
    Navigate("/login")
}

    return (
    <div className="welcome">
           <p>Welcome, {name}!</p>
           <button onClick={handleClick}>Enter the app</button>
    </div>
    )
}

