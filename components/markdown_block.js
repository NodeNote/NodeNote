import React, { Component, PropTypes } from 'react'
import marked from 'marked'

export default class MarkdownBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focus: false
    }
  }
  componentDidUpdate() {
    if(this.state.focus) {
      this.refs.textarea.focus()
    }
  }
  handleOnFocus () {
    this.setState({focus: true})
  }
  handleOnBlur () {
    this.setState({focus: false})
  }
  render () {
    let output
    if (this.state.focus) {
      output = <textarea
        ref='textarea'
        onBlur={this.handleOnBlur.bind(this)}
        value='Markdown *goes* **here**'
      />
    } else {
      output = <div
        onClick={this.handleOnFocus.bind(this)}
        dangerouslySetInnerHTML={{__html: marked('Markdown *goes* **here**')}}
      />
    }
    return <div className='markdown_block'>
      {output}
    </div>
  }
}
MarkdownBlock.propTypes = {
  block: PropTypes.object.isRequired
}
