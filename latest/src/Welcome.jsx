const Welcome = ({name}) => {
    return (
    <div className="welcome">
           <p>Welcome, {name}!</p>
           <Link to="/login">Enter App</Link>
    </div>
    )
}
import { Link } from "react-router-dom"
import "./layout.scss"
export default Welcome 