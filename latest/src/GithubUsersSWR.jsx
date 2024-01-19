import useSWR from "swr";
import { useGitHubUsersSWR } from "./useGitHubUsersSWR";
import { Link, Outlet } from "react-router-dom";


export function GithubUsersSWR() {
    const {users , error , isLoading , onRefresh} = useGitHubUsersSWR()

    return(
        <div>
            <button onClick={onRefresh}>Refresh</button>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>An error as occuped;</h3>}
            {users && (
                <ul>
                    {users.map((user)=>
                    <li key={user.login}> <Link to={`/users/${user.login}`}>{user.login}</Link> </li>)}
                </ul>
            )}
            <Outlet />
        </div>
    )
}