import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import { HelloWorld } from "./HelloWorld";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { MyList } from "./MyList";
import Welcome  from "./Welcome";
import { YourAge } from "./YourAgeIs";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";


export function App() {
    const [language , setLanguage] = useState("en")
        
    function handleSetLanguage(language){
           setLanguage(language)
    }
    
    return (
        <div>
            <button onClick={()=> handleSetLanguage("it")}>IT</button>
            <button onClick={()=> handleSetLanguage("en")}>EN</button>
    <Container title={<h1>My Awesome App</h1>}>
        <LanguageContext.Provider value={language}>
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
        </LanguageContext.Provider>
    </Container>
        </div>
)}