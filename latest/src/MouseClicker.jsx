export function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event.currentTarget.src)
    }
    return (
        <div>
    <button name="btn1" onClick={handleButtonClick}>
     <img src="img" width={24} height={24} onClick={handleButtonClick}></img>   Click me
    </button>
    </div>
    )
}