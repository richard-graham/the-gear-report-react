import React from 'react'
import {Link} from 'react-router-dom'

import islandData from '../../../data/01_islands'

const islandList = Object.values(islandData)

const Island = () => {
    return (
        <div className="islandWrapper">
            <h1>Island!</h1>
            {islandList.map((item, i) => <p key={i}><Link to={`/${item.name}`}>{item.name}</Link></p>)}
        </div>
    )
}

export default Island