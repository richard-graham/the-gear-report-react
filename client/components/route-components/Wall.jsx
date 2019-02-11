import React from 'react'
import {Link} from 'react-router-dom'

import {getClimb} from '../../api/climb_api'
import {getWall} from '../../api/wall_api'

import Ticket from './Ticket'

class Route extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            climbData: [],
            wallData: [],
            island: this.props.match.params.island,
            region: this.props.match.params.region,
            area: this.props.match.params.area,
            crag: this.props.match.params.crag,
            wall: this.props.match.params.wall
        }
    }

    componentDidMount() {
        getClimb() 
        .then((res) => {
            this.setState({
                climbData: res
            })
        })
        getWall()
        .then((res) => {
            this.setState({
                wallData: res
            })
        })
    }

    render() {
        const h1obj = this.state.climbData.find(item => item.wall_name === this.state.wall)
        const wallObj = this.state.wallData.find(item => item.name === this.state.wall)
        return (
            <div className="climbWrapper">
                <h1>{h1obj && h1obj.wall_name}</h1>
                <br/>
                {this.state.wallData.length > 0 && <div>
                <p><strong>Access</strong></p>
                <p>{wallObj.access}</p>
                <p>Altitude: {wallObj.altitude}</p>
                <p>Walk Time: {wallObj.walk_time}</p>
                {this.state.climbData.map((item, i)=> item.wall_name === this.state.wall ? 
                <div key={i}>
                    <h4><Link to={`/${item.island_name}/${item.region_name}/${item.area_name}/${item.crag_name}/${item.wall_name}/${item.name}`}>{item.name}</Link></h4>
                    <ul>
                        <li>Grade: {item.grade}</li>
                        <li>Length: {item.length}</li>
                        <li>Bolts: {item.bolts}</li>
                    </ul>
                </div> : '')}
                <Ticket className="ticket" propsData={this.props}/>
                </div>}
            </div>
        )
    }
} 

export default Route