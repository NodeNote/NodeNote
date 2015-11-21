import React, { Component, PropTypes } from 'react'
import marked from 'marked'

export default class MarkdownBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focus: false
    }
  }
  componentDidUpdate () {
    if (this.state.focus) {
      this.refs.textarea.focus()
    }
  }
  handleOnFocus () {
    this.setState({focus: true})
  }
  handleOnBlur () {
    this.setState({focus: false})
  }
  handleChange (ev) {
    this.props.onChange(this.props.index, ev.target.value)
  }
  render () {
    let output
    const content = this.props.content ? this.props.content : ''
    console.log(content)
    if (this.state.focus) {
      output = <textarea
        ref='textarea'
        onBlur={this.handleOnBlur.bind(this)}
        onChange={this.handleChange.bind(this)}
        value={content}
      />
    } else {
      output = <div
        onClick={this.handleOnFocus.bind(this)}
        dangerouslySetInnerHTML={{__html: marked(content)}}
      />
    }
    return <div className='markdown_block'>
      {output}
    </div>
  }
}
MarkdownBlock.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}
