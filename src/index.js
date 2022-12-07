import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Introduction from './views/introduction'
import Commercecare from './views/commercecare'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Introduction} exact path="/" />
        <Route component={Commercecare} exact path="/commercecare" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
