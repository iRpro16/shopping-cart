import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userInfo from './api/data';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState("");

  useEffect(() => {
    async function fetchToken() {
      setToken(null); //set to null

      fetch(userInfo.token_URL, {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: userInfo.clientId,
          client_secret: userInfo.clientSecret,
        })
      })
      .then(response => response.json())
      .then(data => {
        if (active) {
          setToken(data);
          setRefreshToken(data.refresh_token);
        }
      })
      .catch(error => {
        if (error.status === 403) {
          fetchRefreshToken();
        }
      })
    }

    async function fetchRefreshToken() {
      const url = "https://accounts.spotify.com/api/token";

      const payload = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          client_id: userInfo.clientId
        }),
      }
      const body = await fetch(url, payload);
      const response = await body.json();
      setToken(response.access_token);
      if (response.refreshToken) {
        setRefreshToken(response.refresh_token);
      }
    }

    let active = true;
    fetchToken();
    return () => {
      active = false;
    }
  }, [refreshToken])

  return (
    <>
      <NavBar />
      <Outlet context={token?.access_token}/>
    </>
  )
}

export default App;
