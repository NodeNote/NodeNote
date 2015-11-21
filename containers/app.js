import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from '../reducers'
require('../css/style.css')

import Notebook from './notebook'

let store = createStore(reducer)

export default class App extends Component {
  render () {
    return <Provider store={store}>{() => {
      return <div className='wrapper'>
        <div id='logo'>NodeNote</div>
        <Notebook/>
      </div>
    }}</Provider>
  }
}
