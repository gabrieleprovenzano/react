import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = url=> fetch(url) .then((r)=> r.json())

export function useGitHubUser(username) {
   useSWR("https://api.github.com/users" , fetcher)

   function fetchGitHubUser() {
        mutate()
   }

  return { data, error, loading: !data && !error, onFetchUser: fetchGitHubUser() };
}