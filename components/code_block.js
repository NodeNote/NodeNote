import React, { Component, PropTypes } from 'react'
// import Editor from './editor'

export default class CodeBlock extends Component {
  handleOnChange (ev) {
    this.props.onChange(this.props.index, ev.target.value)
  }
  render () {
    // return <Editor value={this.props.script} onChange={this.handleOnChange.bind(this)}/>
    return <div>
      <textarea value={this.props.content} onChange={this.handleOnChange.bind(this)}/>
    </div>
  }
}

CodeBlock.propTypes = {
  index: PropTypes.number.isRequired,
  content: PropTypes.string,
  onChange: PropTypes.func.isRequired
}
