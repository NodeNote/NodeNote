import React, { Component, PropTypes } from 'react'
// import Editor from './editor'

export default class CodeBlock extends Component {
  handleOnChange (ev) {
    this.props.onChange(this.props.block.index, ev.target.value)
  }
  render () {
    // return <Editor value={this.props.script} onChange={this.handleOnChange.bind(this)}/>
    return <div>
      <textarea value={this.props.block.content} onChange={this.handleOnChange.bind(this)}/>
    </div>
  }
}

CodeBlock.propTypes = {
  block: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
