import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import Home from './route-components/Home'
import Island from './route-components/Island'
import Region from './route-components/Region'
import Area from './route-components/Area'
import Crag from './route-components/Crag'
import Wall from './route-components/Wall'
import Climb from './route-components/Climb'
import DisplayTicket from './route-components/DisplayTicket'
import AddTicket from './route-components/AddTicket'


const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path='/' component={Header} />
        <Route exact path='/' component={Home}/>
        <Route exact path='/:island' component={Island}/>
        <Route exact path='/:island/:region' component={Region}/>
        <Route exact path='/:island/:region/:area' component={Area}/>
        <Route exact path='/:island/:region/:area/:crag' component={Crag}/>
        <Route exact path='/:island/:region/:area/:crag/:wall' component={Wall}/>
        <Route exact path='/:island/:region/:area/:crag/:wall/:climb' component={Climb}/>
        <Route exact path='/tickets/:id' component={DisplayTicket} />
        <Route exact path='/tickets/add/ticket' component={AddTicket} /> 
      </React.Fragment>
    </Router>
  )
}

export default App