import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Main from './Main'
import Search from './Search'
import Detail from './Detail'

const RouteWrapper: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/search/:word" exact component={Search} />
        <Route path="/articles/:id" exact component={Detail} />
      </Switch>
    </Router>
  )
}

export default RouteWrapper
