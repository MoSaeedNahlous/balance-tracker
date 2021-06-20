import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import Tracker from './Tracker'

const TrackerPage = () => {
    return (
        <div className='page-body'>
            <NavBar />
            <Tracker/>
            <Footer />
        </div>
    )
}

export default TrackerPage
