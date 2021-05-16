import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from 'components/Header'
import Container from 'components/common/Container'
import SignInContext from 'context/SignIn'

const { Provider } = SignInContext

const Main = React.lazy(() => import('pages/Main'))
const Search = React.lazy(() => import('pages/Search'))
const Detail = React.lazy(() => import('pages/Detail'))
const Create = React.lazy(() => import('pages/Create'))
const SignUp = React.lazy(() => import('pages/SignUp'))
const Chat = React.lazy(() => import('pages/Chat'))
const MyInfo = React.lazy(() => import('pages/MyInfo'))

const ContainerStyle: React.CSSProperties = {
  top: '80px',
  position: 'relative',
  paddingBottom: '5rem'
}

const RouteWrapper: React.FC = () => {
  return (
    <Router>
      <Provider value={{ isSignIn: true }}>
        <Header />
      </Provider>
      <Container rowProps={{ style: ContainerStyle }}>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/" exact component={Main} />
            <Route path="/search/:word" exact component={Search} />
            <Route path="/article/create" exact component={Create} />
            <Route path="/article/:id" exact component={Detail} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/chat" exact component={Chat} />
            <Route path="/my-info" exact component={MyInfo} />
          </Suspense>
        </Switch>
      </Container>
    </Router>
  )
}

export default RouteWrapper
