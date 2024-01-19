import { json } from "react-router-dom";
import useSWR from "swr";
const fetcher = fetch(url) .then((r)=>r.json())
export function GithubUsersSWR() {
    const {data , error} = useSWR("https://api.github.com/users" , fetcher)
}