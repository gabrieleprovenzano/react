import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import { FocusableInput } from "./FocusableInput";
import { HelloWorld } from "./HelloWorld";
import { MouseClicker } from "./MouseClicker";
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
        <MouseClicker />
        <FocusableInput />
    </div>
)}