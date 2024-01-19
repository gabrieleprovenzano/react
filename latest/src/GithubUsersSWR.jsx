import useSWR from "swr";
import { useGitHubUsersSWR } from "./useGitHubUsersSWR";


export function GithubUsersSWR() {
    const {users , error , isLoading} = useGitHubUsersSWR()

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