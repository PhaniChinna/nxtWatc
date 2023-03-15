import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomePage from './components/HomeRoute'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route path="/login" component={LoginRoute} />
    <Route path="/" component={HomePage} />
  </Switch>
)

export default App
