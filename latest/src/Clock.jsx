import { useEffect, useState } from "react"
import "./layout.scss"
export function Clock() {
    const [date, setDate] = useState(new Date())
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

    return <div className="clock"><h2>Current Time:{date.toLocaleTimeString()}</h2></div>
}