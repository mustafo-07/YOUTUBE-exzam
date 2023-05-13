import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import "../Header/Header.css"
import { useState } from 'react'
// import Register from '../Register/Register'
import FetchData from '../Feach/FetchData'


const Home = () => {
  const [color , setColor] = useState(false);
  const handleChange = ()=>{
  setColor(!color)
  } 
  return (
    <div className={color ? 'app-js' : 'white'}>
      <Header/>
      {/* <Register/> */}
      {/* <FetchData/> */}
    </div>


  )
}

export default Home