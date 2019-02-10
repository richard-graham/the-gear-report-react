import React from 'react'
import {Link} from 'react-router-dom'

import {getArea} from '../../api/area_api'

class Area extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            areaData: [{id: 1, name: "North"}],
            island: this.props.match.params.island,
            region: this.props.match.params.region
        }
    }

    componentDidMount(){
        getArea()
        .then((res)=>{
            this.setState({
                areaData: res
            })
        })
    }

    render(){
        const h1obj = this.state.areaData.find(item => item.region_name === this.state.region)
        return (
            <div className="areaWrapper">
                <h1>{h1obj && h1obj.region_name}</h1>
                {this.state.areaData && this.state.areaData.map((item, i) => this.state.region === item.region_name ? <p key={i}><Link to={`/${item.island_name}/${item.region_name}/${item.name}`}>{item.name}</Link></p> : '')}
            </div>
        )
    }
}

export default Area