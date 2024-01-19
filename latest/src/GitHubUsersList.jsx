import { useEffect, useState } from "react"
import { ShowGithubUser } from "./ShowGitHubUsers"

export function GitHubUserList() {
    const [list , setList] = useState([])
    const [error , setError] = useState(false)
    const [loading , setLoading] = useState(false)

    async function fetchList() {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch("https://api.github.com/users")
            const json = await response.json()
            setList(json)
        } catch (error) {
            setError(error)
            setList(null)
        } finally {
            setLoading(null)
        }
    }

    useEffect(()=>{
        fetchList()
    }, [])

    return(
        <div>
            {loading && <h2>Loading...</h2>}
            {error &&<h2>Error</h2>}
            {list && (
                <ul>
                    {list.map((user)=> (
                           <li key={user.id}>
                            <a href={user.html_url}>{user.login}</a>
                           </li>
                    )
                    )}
                </ul>
            )}
        </div>
    )
}