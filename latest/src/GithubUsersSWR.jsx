import useSWR from "swr";
const fetcher = url => fetch(url) .then((r)=>r.json())
export function GithubUsersSWR() {
    const {data , error} = useSWR("https://api.github.com/users" , fetcher)

    return(
        <div>
            {!data && !error && <h3>Loading...</h3>}
            {error && <h3>An error as occuped;</h3>}
            {data && !error && (
                <ul>
                    {data.map((user)=>
                    <li key={user.login}>{user.login}</li>)}
                </ul>
            )}
        </div>
    )
}