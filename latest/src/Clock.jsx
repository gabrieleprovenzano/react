import { useContext, useEffect, useState } from "react"
import "./layout.scss"
import { LanguageContext } from "./LanguageContext"
export function Clock() {
    const [date, setDate] = useState(new Date())
    const language = useContext(LanguageContext)
    useEffect(()=> {
        const intervalId = setInterval(()=> {
            console.log("Updating date...");
           setDate(new Date())
        }, 1000)
        return () => {
            console.log("clearing interval");
            clearInterval(intervalId)
        }
    },[])

    return <div className="clock"><h2>{language==="en" ? "Current time:" : "Orario attuale:"}{date.toLocaleTimeString()}</h2></div>
}