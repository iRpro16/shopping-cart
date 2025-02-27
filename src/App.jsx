import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userInfo from './api/data';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
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
    .then(data => setToken(data));
  }, []);


  return (
    <>
      <NavBar />
      <Outlet context={token.access_token}/>
    </>
  )
}

export default App;
