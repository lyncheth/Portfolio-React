import { Router } from 'preact-router'

import Introduction from '../routes/introduction/index'
import '../global-style.module.css'

const App = () => {
  return (
    <Router>
      <Introduction path="/" />
    </Router>
  )
}

export default App
