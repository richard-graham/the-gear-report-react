import React from 'react'
import {Link} from 'react-router-dom'

import wallData from '../../../data/05_walls'
import cragData from '../../../data/04_crags'

const wallList = Object.values(wallData)
const cragList = Object.values(cragData)


const Wall = ({match}) => {
    const {crag} = match.params
    const resArr = [];
    let cragObj = null;
    
    wallList.map(item => {
        if (item.crag_name === crag) {
            resArr.push(item)
        }})

    cragList.map(item => {
        if (item.name === crag) {
            cragObj = item
        }
    })

    return (
        <div className="wallWrapper">
            <h1>{cragObj.name}</h1>
            <br />
            <p><strong>Introduction</strong></p>
            <p>{cragObj.introduction}</p>
            <p>Gear: {cragObj.gear}</p>
            <p>Access: {cragObj.access}</p>
            <p>Accommodation: {cragObj.accommodation}</p>
            <br />
            <p><strong>Walls</strong></p>
            {resArr.map((item, i) => <h4 key={i}><Link to={`/${item.island_name}/${item.region_name}/${item.area_name}/${item.crag_name}/${item.name}`}>{item.name}</Link></h4>)}
        </div>
    )
}

export default Wall