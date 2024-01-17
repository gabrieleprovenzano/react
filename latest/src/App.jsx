
import { HelloWorld } from "./HelloWorld";
import Welcome  from "./Welcome";
import { YourAge } from "./YourAgeIs";
import { useState } from "react";
import { GitHubUser } from "./GitHubUser";
import { GithubUsers } from "./GithubUsers";


export function App() {
    const [language , setLanguage] = useState("en")
        
    function handleSetLanguage(language){
           setLanguage(language)
    }
    
    return (
        <div>
        <HelloWorld />
        <p>What a beautiful day</p>
        <hr />
        <Welcome name="Jimmy"/>
        <YourAge age={19}/>
        <GitHubUser username="gabrieleprovenzano"/>
        <GithubUsers />
        </div>
)}