import { useEffect, useState } from "react"
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

    return <div><h2>Current Time:{date.toLocaleTimeString()}</h2></div>
}