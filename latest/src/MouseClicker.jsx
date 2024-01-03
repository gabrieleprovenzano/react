export function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event)
    }
    return <button onClick={handleButtonClick}>Click me</button>
}