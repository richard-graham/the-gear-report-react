import React from 'react'

import routeData from '../../../data/06_routes'

const routeList = Object.values(routeData)

const Climb = ({match}) => {
    const {climb} = match.params
    const resArr = [];
        
    routeList.map(item => {
        if (item.name === climb) {
            resArr.push(item)
        }})
        
    return (
        <div className="routeWrapper">
            <h1>{resArr[0].name}</h1>
            
            {resArr.map((item, i) => 
            <div key={i}>
                <br />
                <p>Grade: {item.grade}</p>
                <p>Height: {item.length}</p>
                <p>Bolts: {item.bolts}</p>
                <p><strong>Description</strong></p>
                <p>{item.description}</p>
                <p>First Ascent: {item.fa}</p>
            </div>
            )}
           
        </div>
    )
}

export default Climb