import React from 'react'
import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'
import Tracker from './Tracker'
import HistoryList from '../history/HistoryList'

const TrackerPage = () => {
    return (
        <div className='page-body'>
            <NavBar />
            <Tracker />
            <HistoryList />
            <Footer />
        </div>
    )
}

export default TrackerPage
