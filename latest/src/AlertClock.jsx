export const AlertClock = ()=> {
    function HandleButtonClick() {
        const now = new Date()
        alert(`The current time is: ${now.toLocaleTimeString()}`)
    }
    return (
        <div>
            <p>Click the button to see the current time.</p>
            <button onClick={HandleButtonClick}>Click Me!</button>
        </div>
    )
}