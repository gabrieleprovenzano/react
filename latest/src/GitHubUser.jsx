import { useParams } from "react-router-dom"
import { useGitHubUser } from "./useGitHubUser"


export function GitHubUser({username}) {

    const {data , error , loading , onFetchUser} = useGitHubUser(username)

    function handleGetUserData() {
        onFetchUser(username)

    }

    return(
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data && <h1> {data.name} </h1>}
          {data && <h1>{data.login}</h1>}
          {data && <img src={data.avatar_url} />}
        </div>
    )
}