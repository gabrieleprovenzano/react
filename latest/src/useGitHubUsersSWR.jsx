import useSWR from "swr"

const fetcher = url => fetch(url) .then((r)=>r.json())

export function useGitHubUsersSWR() {
    const { data , error , mutate} = useSWR("https://api.github.com/users" , fetcher)

    function onHandleRefresh() {
        mutate()
    }

    return {
        users: data,
        error ,
        isLoading: !data && !error,
        onRefresh: onHandleRefresh()
    }
}