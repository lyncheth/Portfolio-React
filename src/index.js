import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AmarAliiUIUXDesigner from './views/amar-alii-u-i-u-x-designer'
import CommerceCare from './views/commerce-care'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AmarAliiUIUXDesigner} exact path="/" />
        <Route component={CommerceCare} exact path="/commerce-care" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
