import React from 'react'
import {Link} from 'react-router-dom'

import regionData from '../../../data/02_regions'

const regionList = Object.values(regionData)

const Region = ({match}) => {
    const {island} = match.params
    const resArr = [];
    regionList.map(item => {
        if (item.island_name === island) {
            resArr.push(item)
        }})

    return (
        <div className="regionWrapper">
            <h1>{resArr[0].island_name}</h1>
            {resArr.map((item, i) => <p key={i}><Link to={`/${item.island_name}/${item.name}`}>{item.name}</Link></p>)}
        </div>
    )
}

export default Region