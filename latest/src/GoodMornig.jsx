export function GooDMorning() {
    const hours = new Date()
    
    const get = hours.getHours()
    let time ;

    if(get <= 9) {
        time = "Good Morning"
    } else if( get <= 10) {
        time = "Good Afternoon"
    } else if(get >= 18){
        time = "Good Evening"
    }

    return(
        <div>
            <h1>{time}</h1>
        </div>
    )
}