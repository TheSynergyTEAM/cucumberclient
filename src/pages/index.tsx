import React, { Suspense, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from 'components/Header'
import Container from 'components/common/Container'
import Create from 'components/create'
import SignInContext from 'context/SignIn'
import SliderContext from 'context/Slider'

const Main = React.lazy(() => import('pages/Main'))
const Search = React.lazy(() => import('pages/Search'))
const Detail = React.lazy(() => import('pages/Detail'))
const SignUp = React.lazy(() => import('pages/SignUp'))
const Chat = React.lazy(() => import('pages/Chat'))
const MyInfo = React.lazy(() => import('pages/MyInfo'))

const ContainerStyle: React.CSSProperties = {
  top: '80px',
  position: 'relative'
}

const RouteWrapper: React.FC = () => {
  const [isSliderVisible, setIsSliderVisible] = useState<boolean>(false)
  return (
    <Router>
      <SliderContext.Provider
        value={{ isVisible: isSliderVisible, setIsVisible: setIsSliderVisible }}
      >
        <SignInContext.Provider value={{ isSignIn: true }}>
          <Header />
        </SignInContext.Provider>
        <Container rowProps={{ style: ContainerStyle }}>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/" exact component={Main} />
              <Route path="/search/:word" exact component={Search} />
              <Route path="/article/:id" component={Detail} />
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/chat" exact component={Chat} />
              <Route path="/my-info" exact component={MyInfo} />
            </Suspense>
          </Switch>
        </Container>

        {isSliderVisible && <Create />}
      </SliderContext.Provider>
    </Router>
  )
}

export default RouteWrapper
