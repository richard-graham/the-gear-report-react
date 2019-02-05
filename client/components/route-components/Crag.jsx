import React from 'react'
import {Link} from 'react-router-dom'

import cragData from '../../../data/04_crags'

const cragList = Object.values(cragData)

const Crag = ({match}) => {
    const {area} = match.params
    const resArr = [];
    
    cragList.map(item => {
        if (item.area_name === area) {
            resArr.push(item)
        }})

    return (
        <div className="cragWrapper">
            <h1>{resArr[0].area_name}</h1>
            {resArr.map((item, i) => <p key={i}><Link to={`/${item.island_name}/${item.region_name}/${item.area_name}/${item.name}`}>{item.name}</Link></p>)}
        </div>
    )
}

export default Crag