import React, { Component, PropTypes } from 'react'
import MarkdownBlock from './markdown_block'
import CodeBlock from './code_block'

export default class Blocks extends Component {
  render () {
    const blocks = this.props.blocks.map((block) => {
      if (block.get('type') === 'markdown') {
        return <MarkdownBlock
          index={block.get('index')}
          content={block.get('content')}
          onChange={this.props.onChange.bind(this)}
        />
      }
      if (block.get('type') === 'code') {
        return <CodeBlock
          index={block.get('index')}
          content={block.get('content')}
          onChange={this.props.onChange.bind(this)}
        />
      }
      return null
    })
    return <div>
      {blocks}
    </div>
  }
}
Blocks.propTypes = {
  blocks: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
