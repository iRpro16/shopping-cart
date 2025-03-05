import DisplayGenre from './components/DisplayGenre.jsx';
import DisplayAll from './components/DisplayAll.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { 
        path: "shop", 
        element: <Shop />,
        children: [
          { index: true, element: <DisplayAll />},
          { path: "/shop/:genre", element: <DisplayGenre/>}
        ]
      },
    ]
  },
])

export default router;