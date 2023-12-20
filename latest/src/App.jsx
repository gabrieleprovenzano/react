import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import { HelloWorld } from "./HelloWorld";
import Welcome  from "./Welcome";
import { YourAge } from "./YourAgeIs";

export function App() {
    return (
    <div>
        <HelloWorld />
        <p>What a beautiful day</p>
        <hr />
        <Welcome name="Jimmy"/>
        <YourAge age={19}/>
        <AlertClock />
        <Counter />
        <CounterDisplay />
    </div>
)}