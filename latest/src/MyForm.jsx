import { useEffect, useRef, useState } from "react"

export function MyForm() {
    const [data, setData] = useState({
        username:"",
        password:"",
        session: false
    })

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value,
            }
        })
    }

    function handleResetForm(){
        setData({
            username:"",
            password:"",
            session: false
        })
    }

    function handleLoginFormSubmit(event) {
        console.log(("Login button pressed") , data);
    }
    
    const mountedRef = useRef(false)
    const inputRef = useRef(null)
    
    useEffect(()=> {
        if(!mountedRef.current){
            mountedRef.current = true
            console.log("mounted for the first time");
        }else{
            console.log("mounting again");
        }
        inputRef.current?.focus()
    }, [])

    console.log(inputRef);

    return( 
    <form onSubmit={handleLoginFormSubmit}>
        <h1>My form</h1>
    <input ref={inputRef} name= "username" value={data.username} onChange={handleInputChange} />
    <input name= "password" type="password" value={data.password} onChange={handleInputChange} />
    <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
    <button type="submit" disabled= {!data.username || !data.password}>Login</button>
    <button onClick={handleResetForm}>Reset</button>
    <pre>
        {JSON.stringify(data , null , 2)}
    </pre>
    </form>
    )
}

