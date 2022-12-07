import { Router } from 'preact-router'

import Introduction from '../routes/introduction/index'
import Commercecare from '../routes/commercecare/index'
import '../global-style.module.css'

const App = () => {
  return (
    <Router>
      <Introduction path="/" />
      <Commercecare path="/commercecare" />
    </Router>
  )
}

export default App
