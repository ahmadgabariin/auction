import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import Navbar from './../Navbar/Navbar'
import './Container.css'
function Container() {
  return (
    <div className='Container'>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element = {<MainPage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Container