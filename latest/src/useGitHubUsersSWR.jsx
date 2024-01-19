import useSWR from "swr"

const fetcher = url => fetch(url) .then((r)=>r.json())

export function useGitHubUsersSWR() {
    const { data , error } = useSWR("https://api.github.com/users" , fetcher)

    return {
        users: data,
        error ,
        isLoading: !data && !error
    }
}