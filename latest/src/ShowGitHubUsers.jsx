import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function ShowGithubUser() {
    const { username } = useParams()
    const [user, setUser] = useState(null)
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch(`https://api.github.com/users/${username}`);
          const json = await response.json()
        } catch (error) {
          console.error('Error fetching user:', error)
        }
      }
  
      fetchUser()
    }, [username])
  
    return (
      <div>
        {user ? (
          <div>
            <h2>{user.login}</h2>
            <p>ID: {user.id}</p>
            <img src={data.avatar_url} />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
  }