import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import { GooDMorning } from "./GoodMornig";
import { HelloWorld } from "./HelloWorld";
import { LoginEx } from "./LoginEx";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { MyList } from "./MyList";
import Welcome  from "./Welcome";
import { YourAge } from "./YourAgeIs";

export function App() {
    return (
    <div className="app">
        <HelloWorld />
        <p>What a beautiful day</p>
        <hr />
        <Clock />
        <Welcome name="Jimmy"/>
        <YourAge age={19}/>
        <AlertClock />
        <Counter />
        <CounterDisplay />
        <MouseClicker />
        <MyForm />
        <MyList 
        items={[
            {id:1 , name:"string1"},
            {id:2 , name:"string2"},
            {id:3 , name:"string3"}
        ]}
        />
        <GooDMorning />
    </div>
)}