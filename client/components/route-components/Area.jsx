import React from 'react'
import {Link} from 'react-router-dom'
import Ticket from './Ticket'

import {getCrag} from '../../api/crag_api'

class Crag extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cragData: [],
            island: this.props.match.params.island,
            region: this.props.match.params.region,
            area: this.props.match.params.area
        }
    }

    componentDidMount(){
        getCrag()
        .then((res)=>{
            this.setState({
                cragData: res
            })
        })
    }

    render(){
        const h1obj = this.state.cragData.find(item => item.area_name === this.state.area)
        return (
            <div className="islandWrapper">
                <h1>{h1obj && h1obj.area_name}</h1>
                {this.state.cragData && this.state.cragData.map((item, i) => this.state.area === item.area_name ? <button className={`regionbutton${i}`} key={i}><Link to={`/${item.island_name}/${item.region_name}/${item.area_name}/${item.name}`}>{item.name}</Link></button> : '')}
                <Ticket className="ticket" propsData={this.props}/>
            </div>
        )
    }
}

export default Crag