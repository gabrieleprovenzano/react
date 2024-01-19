import { useParams } from "react-router-dom"
import { useGitHubUser } from "./useGitHubUser"
import { useGitHubUsersSWR } from "./useGitHubUsersSWR"


export function GitHubUser() {
    const {username} = useParams()
    const {data , error , loading , onFetchUser} = useGitHubUsersSWR(username)

    function handleGetUserData() {
        onFetchUser()

    }

    return(
        <div>
            <button onClick={handleGetUserData}>Load</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data && <h1> {data.name} </h1>}
          {data && <h1>{data.login}</h1>}
          {data && <img src={data.avatar_url} />}
        </div>
    )
}