import 'babel-core/polyfill'
import React from 'react'
import App from './containers/app'
import ReactDOM from 'react-dom'
require('./css/style.css')

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
