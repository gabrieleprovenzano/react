import useSWR from "swr"

export function useGitHubUsersSWR() {
    const { data , error , mutate} = useSWR("https://api.github.com/users")

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