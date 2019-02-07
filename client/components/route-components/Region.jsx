// import React from 'react'
// import {Link} from 'react-router-dom'

// import regionData from '../../../data/02_regions'

// const regionList = Object.values(regionData)

// const Region = ({match}) => {
//     const {island} = match.params
//     const resArr = [];
//     regionList.map(item => {
//         if (item.island_name === island) {
//             resArr.push(item)
//         }})

//     return (
//         <div className="regionWrapper">
//             <h1>{resArr[0].island_name}</h1>
//             {resArr.map((item, i) => <p key={i}><Link to={`/${item.island_name}/${item.name}`}>{item.name}</Link></p>)}
//         </div>
//     )
// }

// export default Region

import React from 'react'
import {Link} from 'react-router-dom'

import {getRegion} from '../../api/region_api'

class Region extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            regionData: [{id: 1, name: "North"}]
        }
    }

    componentDidMount(){
        console.log(getRegion());
        getRegion()
        .then((res)=>{
            console.log('component res', res)
            this.setState({
                regionData: res
            })
        })
    }

    render(){
        return (
            <div className="regionWrapper">
                <h1>region!</h1>
                {this.state.regionData && this.state.regionData.map((item, i) => <p key={i}><Link to={`/${item.name}`}>{item.name}</Link></p>)}
            </div>
        )
    }
}

export default Region