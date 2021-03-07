import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'

const Main = React.lazy(() => import('pages/Main'))
const Search = React.lazy(() => import('pages/Search'))
const Detail = React.lazy(() => import('pages/Detail'))

const SwitchWrapper = styled.div`
  position: relative;
  top: 60px;
`

const RouteWrapper: React.FC = () => {
  return (
    <Router>
      <Header />
      <SwitchWrapper>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Main} />
            <Route path="/search/:word" exact component={Search} />
            <Route path="/articles/:id" exact component={Detail} />
          </Suspense>
        </Switch>
      </SwitchWrapper>
    </Router>
  )
}

export default RouteWrapper
