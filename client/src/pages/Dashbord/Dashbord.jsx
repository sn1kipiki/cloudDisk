import React from 'react'
import SearchPanel from '../../components/SearchPanel/SearchPanel'
import Sidebar from '../../components/SideBar/Sidebar'
import './styles.scss'
function Dashbord() {
  return (
    <>
    
    <Sidebar/>
    <div className='center-area'>
      
      <SearchPanel/>
    </div>
    </>
  )
}

export default Dashbord