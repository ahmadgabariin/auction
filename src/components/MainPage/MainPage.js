import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Sidebar from '../Sidebar/Sidebar'
import './MainPage.css'
function MainPage() {
  return (
    <div className='container-main-page'>
      <Searchbar/>
      <div className='main-page'>
        <div className='inner-grid'>
          adw
        </div>
        <div className='side-bar-container'>
          <Sidebar/>
        </div>
      </div>
    </div>
    
  )
}

export default MainPage