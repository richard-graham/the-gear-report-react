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

import Nav from './Nav'
import Header from './Header'
import Island from './Island'
import Region from './Region'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Island} />
        <Route path='/:island' component={Region}/>
      </div>
     
    </Router>
  )
}

export default App