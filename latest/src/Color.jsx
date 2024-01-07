export function Color({color}) {

    return (
        <ul>
            {color.map((colors)=> (
                <li>{colors}</li>
            ))}
        </ul>
    )
}