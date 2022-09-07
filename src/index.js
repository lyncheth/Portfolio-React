import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Introduction from './views/introduction'
import Projects from './views/projects'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Introduction} exact path="/" />
        <Route component={Projects} exact path="/projects" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
