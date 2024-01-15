import { useState } from "react"


export function Container({title , children}) {
        const [collapse , setCollapse] =useState(false)

        function handleToggleCollapse() {
            setCollapse(t => !t)
        }
    return(
        <div className="container">
            <div className="class-title">{title}</div>
            <button onClick={handleToggleCollapse}>Toggle</button>
           {collapse && <div className="class-content">{children}</div>}
        </div>
    )
}