import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AmarAliiUIUXDesigner from './views/amar-alii-u-i-u-x-designer'
import AmarAliiCommerceCare from './views/amar-alii-commerce-care'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AmarAliiUIUXDesigner} exact path="/" />
        <Route
          component={AmarAliiCommerceCare}
          exact
          path="/amar-alii-commerce-care"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
