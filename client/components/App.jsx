// import React from 'react'
// import { HashRouter as Router, Route } from 'react-router-dom'

// import islands from "../../data/01_islands"

// const Region = (props)=>{
//   return <div>{props.regions.map((line)=>{ return <p>{line.name}</p>})}</div>
// }

// const Stuff = (props)=>{
//   return <h1>Stuff</h1>
// }

// // const App = () => {
// class App extends React.Component {
//   constructor(props){
//     super(props)

//     this.state = {
//       data: [],
//       level: "region"
//     }
//   }

//   componentDidMount(){

//     this.setState({
//       data: islands
//     })


//   }

//   render(){
//     return (
//       <div>
//         <h1>React development has begun!</h1>

//         <Region regions={this.state.data}/>
//         <Router>
//           <Route path="/region" exact component={Stuff} />
//         </Router>
//       </div>
//     )
//   }
// }

// export default App

import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Island from './route-components/Island'
import Region from './route-components/Region'
import Area from './route-components/Area'
import Crag from './route-components/Crag'
import Wall from './route-components/Wall'
import Routes from './route-components/Route'
import Climb from './route-components/Climb'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Island} />
        <Route exact path='/:island' component={Region}/>
        <Route exact path='/:island/:region' component={Area}/>
        <Route exact path='/:island/:region/:area' component={Crag}/>
        <Route exact path='/:island/:region/:area/:crag' component={Wall}/>
        <Route exact path='/:island/:region/:area/:crag/:wall' component={Routes}/>
        <Route exact path='/:island/:region/:area/:crag/:wall/:climb' component={Climb}/>
      </div>
    </Router>
  )
}

export default App