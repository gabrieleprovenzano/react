
import { GitHubUser } from "./GitHubUser";
import { HelloWorld } from "./HelloWorld";
import { HookCounter } from "./HookCounter";
import { HookForm } from "./HookForm";
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
        <GitHubUser username="gabrieleprovenzano"/>
        <HookForm />
        </div>
)}