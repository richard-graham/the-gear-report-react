// import React from 'react'
// import {Link} from 'react-router-dom'

// import areaData from '../../../data/03_areas'

// const areaList = Object.values(areaData)

// const Area = ({match}) => {
//     const {region} = match.params
//     const resArr = [];

//     areaList.map(item => {
//         if (item.region_name === region) {
//             resArr.push(item)
//         }})

//     return (
//         <div className="areaWrapper">
//             <h1>{resArr[0].region_name}</h1>
//             {resArr.map((item, i) => <p key={i}><Link to={`/${item.island_name}/${item.region_name}/${item.name}`}>{item.name}</Link></p>)}
//         </div>
//     )
// }

// export default Area

import React from 'react'
import {Link} from 'react-router-dom'

import {getArea} from '../../api/area_api'

class Area extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            areaData: [{id: 1, name: "North"}],
        }
    }

    componentDidMount(){
        console.log(getArea());
        getArea()
        .then((res)=>{
            this.setState({
                areaData: res
            })
        })
    }

    render(){
        return (
            <div className="areaWrapper">
                <h1>Area!</h1>
                {this.state.areaData && this.state.areaData.map((item, i) => this.state.island === item.island_name ? <p key={i}><Link to={`/${item.name}`}>{item.name}</Link></p> : '')}
            </div>
        )
    }
}

export default Area