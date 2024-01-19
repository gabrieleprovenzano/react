import { useEffect, useState } from "react";
import useSWR from "swr";

export function useGitHubUser(username) {
   useSWR("https://api.github.com/users")

   function fetchGitHubUser() {
        mutate()
   }

  return { data, error, loading: !data && !error, onFetchUser: fetchGitHubUser() };
}