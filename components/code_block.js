import React, { Component, PropTypes } from 'react'
import Editor from './editor'

export default class CodeBlock extends Component {
  // handleOnChange (new_code) {
  //   this.props.onChange(new_code)
  // }
  render () {
    // return <Editor value={this.props.script} onChange={this.handleOnChange.bind(this)}/>
    return <div>
      <textarea defaultValue='Code goes here'/>
    </div>
  }
}

// CodeBlock.propTypes = {
//   script: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// }
