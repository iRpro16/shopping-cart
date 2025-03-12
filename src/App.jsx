import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar';
import useFetchAlbums from './hooks/useFetchAlbums';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const numberItems = cartItems ? cartItems.reduce((n, {quantity}) => n + quantity, 0) : 0;
  const { albums } = useFetchAlbums();

  return (
    <>
      <NavBar numberItems={numberItems}/>
      <Outlet context={{albums, cartItems, setCartItems}}/>
    </>
  )
}

export default App;