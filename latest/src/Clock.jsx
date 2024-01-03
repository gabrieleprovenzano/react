import { useEffect, useState } from "react"
export function Clock() {
    console.log("setting up clock");
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

    return <div><p>Current Time:{date.toLocaleTimeString()}</p></div>
}