import React, { useState } from "react";
import { GitHubUser } from "./GitHubUser"; 

export function GithubUsers() {
  const [searchUsername, setSearchUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(`https://api.github.com/users/${searchUsername}`)
      .then((response) => response.json())
      .then((userData) => {

        setUsers((prevUsers) => [...prevUsers, userData]);
      })
      .catch((error) => console.error("Error fetching user data", error));

    setSearchUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          GitHub Username:
          <input
            type="text"
            value={searchUsername}
            onChange={(e) => setSearchUsername(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <GitHubUser username={user.login} />
          </li>
        ))}
      </ul>
    </div>
  );
}