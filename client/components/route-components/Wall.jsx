import React from 'react'
import {Link} from 'react-router-dom'

import wallData from '../../../data/05_walls'

const wallList = Object.values(wallData)

const Wall = ({match}) => {
    const {crag} = match.params
    const resArr = [];
    
    wallList.map(item => {
        if (item.crag_name === crag) {
            resArr.push(item)
        }})

    return (
        <div className="wallWrapper">
            <h1>{resArr[0].crag_name}</h1>
            {resArr.map((item, i) => <p key={i}><Link to={`/${item.island_name}/${item.region_name}/${item.area_name}/${item.crag_name}/${item.name}`}>{item.name}</Link></p>)}
        </div>
    )
}

export default Wall