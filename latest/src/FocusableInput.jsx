import { useEffect, useRef } from "react";

export function FocusableInput() {

    const focusRef = useRef(null)

    useEffect(()=> {
        focusRef.current?.focus()
    },[])

    console.log(focusRef);

    return(
        <form>
            <h1>My form</h1>
            <input name="username" ref={focusRef} />
        </form>
    )
}