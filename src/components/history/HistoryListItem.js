import React from 'react'

const HistoryListItem = ({ value }) => {
    if (value[0] === '-') {
        return (
            <li className='list-item-container minus'>
            <p>{value}</p>
        </li>
        )
    }
    return (
            <li className='list-item-container plus'>
            <p>{value}</p>
        </li>
    )
}

export default HistoryListItem
