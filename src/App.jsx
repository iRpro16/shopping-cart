import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import userInfo from './api/data';
import './App.css';

function App() {
  const [token, setToken] = useState(null);
  const [vinyls, setVinyls] = useState([]);

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
          setToken(data?.access_token);
        }
      })
      .catch(error => {
        if (error.status === 401) {
          console.warn("Refresh token expired");
        }
      })
    }

    let active = true;
    fetchToken();
    return () => {
      active = false;
    }
  }, []);

  return (
    <>
      <NavBar />
      <Outlet context={{token, vinyls, setVinyls}}/>
    </>
  )
}

export default App;
