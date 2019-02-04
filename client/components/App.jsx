import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import islands from "../../data/01_islands"

const Region = (props)=>{
  return <div>{props.regions.map((line)=>{ return <p>{line.name}</p>})}</div>
}

const Stuff = (props)=>{
  return <h1>Stuff</h1>
}

// const App = () => {
class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      level: "region"
    }
  }

  componentDidMount(){

    this.setState({
      data: islands
    })


  }

  render(){
    return (
      <div>
        <h1>React development has begun!</h1>

        <Region regions={this.state.data}/>
        <Router>
          <Route path="/region" exact component={Stuff} />
        </Router>
      </div>
    )
  }
}

export default App

