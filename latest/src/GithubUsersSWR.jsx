import useSWR from "swr";


const fetcher = url => fetch(url) .then((r)=>r.json())

function useGitHubUsers() {
    const { data , error } = useSWR("https://api.github.com/users" , fetcher)

    return {
        users: data,
        error ,
        isLoading: !data && !error
    }
}


export function GithubUsersSWR() {
    const {users , error , isLoading} = useGitHubUsers()

    return(
        <div>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>An error as occuped;</h3>}
            {users && (
                <ul>
                    {users.map((user)=>
                    <li key={user.login}>{user.login}</li>)}
                </ul>
            )}
        </div>
    )
}