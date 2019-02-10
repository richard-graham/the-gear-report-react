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