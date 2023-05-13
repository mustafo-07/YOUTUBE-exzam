import './App.css'
import {Routes, Route } from 'react-router-dom'


import Home from './components/Home/Home'
import Error from './components/Error/Error'
import Register from './components/Register/Registration'
import SinglPage from './components/SingelPage/SinglPage'
import Login from './components/Login/Login'
// import Header from './components/Header/Header'


function App() {

  return (
      <Routes>
<Route element={<Home/>} path = "/"></Route>
<Route element={<Error/>} path = "/error404"></Route>
<Route element={<h1>Trending</h1>} path = "/Trending"></Route>
<Route element={<h1>Subscriptions</h1>} path = "/Subscriptions"></Route>
<Route element={<h1>Library</h1>} path = "/Library"></Route>
<Route element={<h1>History</h1>} path = "/History"></Route>
<Route element={<h1>Watch</h1>} path = "/Watch"></Route>
<Route element={<h1>Favourites</h1>} path = "/Favourites"></Route>
<Route element={<h1>Liked videos</h1>} path = "/Liked videos"></Route>
<Route element={<h1>Music</h1>} path = "/Music"></Route>
<Route element={<h1>Games</h1>} path = "/Games"></Route>
<Route element={<Login/>} path= "/Login"></Route>
<Route element={<Register/>} path= "/Register"></Route>
<Route element={<SinglPage/>} path= "/news/:id"></Route>
   </Routes>

  )
}

export default App
