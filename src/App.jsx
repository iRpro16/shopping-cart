import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import concatStringIDS from './utils/concatStrings';
import createUpdatedArray from './utils/createUpdatedArray';
import allAlbums from './api/allAlbumsData';
import NavBar from './components/NavBar';
import userInfo from './api/userInfo';
import './App.css';

function App() {
  const [vinyls, setVinyls] = useState([]);
  const [albums, setAlbums] = useState(null);
  const token_URL = "https://accounts.spotify.com/api/token";
  const spotify_URL = "https://api.spotify.com/v1/albums?ids=";
  const albumIDSArray = allAlbums.map(album => album.albumID);
  const albumIDS = concatStringIDS(albumIDSArray);

  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    try {
      const response = await fetch(token_URL, {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: userInfo.clientId,
          client_secret: userInfo.clientSecret,
        })
      })
      const data = await response.json();
      fetchAlbumData(data?.access_token);
    } catch (error) {
      console.error('Error fetching token:', error);
    } 
  }

  const fetchAlbumData = async (token) => {
    try {
      const response = await fetch(spotify_URL + albumIDS, {
        method: "get",
        headers: {"Authorization": `Bearer ${token}`}
      });
      const data = await response.json();
      const updatedAlbumsArray = createUpdatedArray(data?.albums, allAlbums);
      setAlbums(updatedAlbumsArray);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }
  
  return (
    <>
      <NavBar />
      <Outlet context={{albums, vinyls, setVinyls}}/>
    </>
  )
}

export default App;