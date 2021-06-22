import React, { useContext, useEffect } from 'react'
import { HistoryGlobalContext } from '../context/history context/HistoryGlobalState'
import HistoryListItem from './HistoryListItem'

const HistoryList = () => {
    const context = useContext(HistoryGlobalContext)
    const { historyArray } = context
    useEffect(() => {
        console.log(1);
        
    }, [historyArray])
    return (
        <div className="list-container">
            <h3>Operation History</h3>
            <ul>
                {
                    historyArray.map(item => {
                        return <HistoryListItem value={item} />
                    })
            }
            </ul>
        </div>
    )
}

export default HistoryList
