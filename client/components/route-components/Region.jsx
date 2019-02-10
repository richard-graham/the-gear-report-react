import React from 'react'
import {Link} from 'react-router-dom'

import {getRegion} from '../../api/region_api'

class Region extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            regionData: [{id: 1, name: "North"}],
            island: this.props.match.params.island
        }
    }

    componentDidMount(){
        getRegion()
        .then((res)=>{
            this.setState({
                regionData: res
            })
        })
    }
    
    render(){
        const h1obj = this.state.regionData.find(item => item.island_name === this.state.island)
        return (
            <div className="regionWrapper">
                <h1>{h1obj && h1obj.island_name} Island</h1>
                {this.state.regionData && this.state.regionData.map((item, i) => this.state.island === item.island_name ? <p key={i}><Link to={`/${item.island_name}/${item.name}`}>{item.name}</Link></p> : '')}
            </div>
        )
    }
}

export default Region