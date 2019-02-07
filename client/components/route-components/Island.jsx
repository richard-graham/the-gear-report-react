import React from 'react'
import {Link} from 'react-router-dom'

import islandData from '../../../data/01_islands'

import {getIsland} from '../../api/island_api'


const islandList = Object.values(islandData)


class Island extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            islandData: []
        }
    }

    componentDidMount(){
        getIsland()
        .then((res)=>{
            console.log('component res', res)
            this.setState({
                islandData: res
            })
        })
    }

    render(){
        return (
            <div className="islandWrapper">
                <h1>Island!</h1>
                {this.state.islandData && this.state.islandData.map((item, i) => <p key={i}><Link to={`/${item.name}`}>{item.name}</Link></p>)}
            </div>
        )
    }
}

export default Island