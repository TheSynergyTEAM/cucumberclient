import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import createAxiosInstance from 'utils/axios'
import 'styles/global.less'

createAxiosInstance()

ReactDOM.render(<App />, document.getElementById('root'))
