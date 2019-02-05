import React from 'react'
import {Link} from 'react-router-dom'

import routeData from '../../../data/06_routes'
import wallData from '../../../data/05_walls'

const routeList = Object.values(routeData)
const wallList = Object.values(wallData)

const Route = ({match}) => {
    const {wall} = match.params
    const routeArr = [];
    let wallObj = null

    routeList.map(item => {
        if (item.wall_name === wall) {
            routeArr.push(item)
    }})

    wallList.map(item => {
        if (item.name === wall) {
            wallObj = item
        }
    })

    return (
        <div className="routeWrapper">
            <h1>{wallObj.name}</h1>
            <br />
            <p><strong>Access</strong></p>
            <p>{wallObj.access}</p>
            <p>Altitude: {wallObj.altitude}</p>
            <p>Walk Time: {wallObj.walk_time}</p>
            
            {routeArr.map((item, i) => 
            <div>
            <h4 key={i}><Link to={`/${item.island_name}/${item.region_name}/${item.area_name}/${item.crag_name}/${item.wall_name}/${item.name}`}>{item.name}</Link></h4>
            <ul>
                <li>Grade: {item.grade}</li>
                <li>Length: {item.length}</li>
                <li>Bolts: {item.bolts}</li>
            </ul>
            </div>
            )}
           
        </div>
    )
}

export default Route