import React from 'react'
import {Link} from 'react-router-dom'

import islandData from '../../../data/01_islands'

import {getIsland} from '../../api/island_api'


const islandList = Object.values(islandData)

// const Island = () => {
class Island extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            islandData: ["got this far"]
        }
    }

    componentDidMount(){
        getIsland()
        .then((res)=>{
            this.setState({
                islandData: [res.data]
            })
        })
    }

    render(){
        return (
            <div className="islandWrapper">
                <p>{this.state.islandData}</p>
                <h1>Island!</h1>
                {islandList.map((item, i) => <p key={i}><Link to={`/${item.name}`}>{item.name}</Link></p>)}
            </div>
        )
    }
}

export default Island