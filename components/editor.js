import React, { Component, PropTypes } from 'react'
import Codemirror from 'react-codemirror'

require('codemirror/lib/codemirror.css')
require('codemirror/theme/base16-dark.css')

require('codemirror/mode/javascript/javascript.js')

class Editor extends Component {
  render () {
    var options = {
      lineNumbers: true,
      mode: 'javascript',
      theme: 'base16-dark'
    }
    const value = this.props.value ? this.props.value : ''
    return <Codemirror
      value={value}
      onChange={this.props.onChange}
      options={options}
    />
  }
}

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Editor
