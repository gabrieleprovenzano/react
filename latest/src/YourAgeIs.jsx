export const YourAge = ({age , name}) => {
    return (
    <div>
    {/*age === 18 && <p>Your Age is {age} years old</p>}
    {/*!!age && <p>Hello</p>}
    {{age > 18 && age < 65 && <p>Your Age is {age} years old</p>}
    {age > 18 && age < 65 && <p>Your Age is {age} years old, {name}</p>*/}
    {age > 18 && <p>You're very young</p>}
    </div>
    )
}