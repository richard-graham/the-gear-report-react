import React from 'react'
import {Link} from 'react-router-dom'

import {getCrag} from '../../api/crag_api'
import {getWall} from '../../api/wall_api'


// const Wall = ({match}) => {
//     console.log(match)
//     const {crag} = match.params
//     const resArr = [];
//     let cragObj = null;
    
//     wallList.map(item => {
//         if (item.crag_name === crag) {
//             resArr.push(item)
//         }})

//     cragList.map(item => {
//         if (item.name === crag) {
//             cragObj = item
//         }
//     })

//     return (
//         <div className="wallWrapper">
//             <h1>{cragObj.name}</h1>
//             <br />
//             <p><strong>Introduction</strong></p>
//             <p>{cragObj.introduction}</p>
//             <p>Gear: {cragObj.gear}</p>
//             <p>Access: {cragObj.access}</p>
//             <p>Accommodation: {cragObj.accommodation}</p>
//             <br />
//             <p><strong>Walls</strong></p>
//             {resArr.map((item, i) => <h4 key={i}><Link to={`/${item.island_name}/${item.region_name}/${item.area_name}/${item.crag_name}/${item.name}`}>{item.name}</Link></h4>)}
//         </div>
//     )
// }

class Wall extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wallData: [],
            cragData: [],
            island: this.props.match.params.island,
            region: this.props.match.params.region,
            area: this.props.match.params.area,
            crag: this.props.match.params.crag
        }
    }

    componentDidMount() {
        getWall() 
        .then((res) => {
            this.setState({
                wallData: res
            })
        })
        getCrag()
        .then((res) => {
            this.setState({
                cragData: res
            })
        })
    }

    render() {
        const h1obj = this.state.wallData.find(item => item.crag_name === this.state.crag)
        const cragObj = this.state.cragData.find(item => item.name === this.state.crag)
        console.log(this.state.crag)
        console.log(this.state.wallData)
        return(
            <div className="wallWrapper">
                <h1>{h1obj && h1obj.crag_name}</h1>
                <br/>
                <p><strong>Introduction</strong></p>
                <p>{this.state.cragData.length > 0 && cragObj.introduction}</p>
                <p>Gear: {this.state.cragData.length > 0 && cragObj.gear}</p>
                <p>Access: {this.state.cragData.length > 0 && cragObj.access}</p>
                <p>Accommodation: {this.state.cragData.length > 0 && cragObj.accommodation}</p>
                <br />
                <p><strong>Walls</strong></p>
                {this.state.wallData.length > 0 && this.state.wallData.map((item, i) => item.crag_name === this.state.crag ? <h4 key={i}><Link to={`/${item.island_name}/${item.region_name}/${item.area_name}/${item.crag_name}/${item.name}`}>{item.name}</Link></h4> : '')}
            </div>
        )
    }
    
}

export default Wall