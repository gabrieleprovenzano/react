
import { CurrentLocation } from "./CurrentLocation";
import { HelloWorld } from "./HelloWorld";
import { HookCounter } from "./HookCounter";
import Welcome  from "./Welcome";
import { YourAge } from "./YourAgeIs";
import { useState } from "react";
import { HookCounters } from "./useCounter";


export function App() {

    return (
        <div>
        <HelloWorld />
        <p>What a beautiful day</p>
        <hr />
        <Welcome name="Jimmy"/>
        <YourAge age={19}/>
        <CurrentLocation />
        <HookCounters initialValue={0} />
        </div>
)}