import { HelloWorld } from "./HelloWorld";
import Welcome  from "./Welcome";

export function App() {
    return (
    <div>
        <HelloWorld />
        <p>What a beautiful day</p>
        <hr />
        <Welcome name="Jimmy" age={24}/>
    </div>
)}