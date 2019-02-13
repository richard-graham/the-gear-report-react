import React from 'react'
import {Link} from 'react-router-dom'

import {getIsland} from '../../api/island_api'

import Ticket from './Ticket'

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
            this.setState({
                islandData: res
            })
        })
    }

    render(){
        return (
            <div className="homeWrapper">
                <h1 className='h1header'>The Gear Report</h1>
                <h2 className='h2header'>Making Climbing Safer For Everyone</h2>
                <h3 className='h3header'>New Zealand</h3>
                {this.state.islandData && this.state.islandData.map((item, i) => <button className={`island${i}`} key={i}><Link to={`/${item.name}`}>{item.name} Island</Link></button>)}
                <Ticket propsData={this.props}/>
            </div>
        )
    }
}

export default Island