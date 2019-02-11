import React from 'react'

import {getClimb} from '../../api/climb_api'

class Climb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            climbData: [],
            island: this.props.match.params.island,
            region: this.props.match.params.region,
            area: this.props.match.params.area,
            crag: this.props.match.params.crag,
            wall: this.props.match.params.wall,
            climb: this.props.match.params.climb
        }
    }

    componentDidMount() {
        getClimb() 
        .then((res) => {
            this.setState({
                climbData: res
            })
        })
    }

    render() {
        const h1obj = this.state.climbData.find(item => item.wall_name === this.state.wall)
        const climbObj = this.state.climbData.find(item => item.name === this.state.climb)
        console.log(this.props.match.params)
        return(
            <div className="wallWrapper">
                <h1>{h1obj && h1obj.name}</h1>
                <br/>
                <br />
                {this.state.climbData.length > 0 && <div>
                <p>Grade: {climbObj.grade}</p>
                <p>Height: {climbObj.length}</p>
                <p>Bolts: {climbObj.bolts}</p>
                <p><strong>Description</strong></p>
                <p>{climbObj.description}</p>
                <p>First Ascent: {climbObj.fa}</p>
                </div>}
            </div>
        )
    }
    
}


export default Climb