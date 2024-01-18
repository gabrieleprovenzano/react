import { useGitHubUser } from "./useGitHubUser"


export function GitHubUser({username}) {

    const {data , error , loading , onFetchUser} = useGitHubUser(username)

    function handleGetUserData() {
        onFetchUser(username)

    }

    return(
        <div>
            <button onClick={handleGetUserData}>Click</button>
            {loading && <h1>Loading...</h1>}
            {data && <h1> {data.name} </h1>}
          {data && <h1>{data.login}</h1>}
          {data && <img src={data.avatar_url} />}
        </div>
    )
}