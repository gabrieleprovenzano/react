

import { GithubUsers } from "./GithubUsers";
import { HelloWorld } from "./HelloWorld";
import { HookCounter } from "./HookCounter";
import Welcome  from "./Welcome";
import { YourAge } from "./YourAgeIs";
import { useState } from "react";


export function App() {

    return (
        <div>
        <HelloWorld />
        <p>What a beautiful day</p>
        <hr />
        <Welcome name="Jimmy"/>
        <YourAge age={19}/>
        <HookCounter initialValue={99}/>
        <GithubUsers />
        </div>
)}