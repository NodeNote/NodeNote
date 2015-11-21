import React, { Component, PropTypes } from 'react'
import MarkdownBlock from './markdown_block'
import CodeBlock from './code_block'

export default class Blocks extends Component {
  render () {
    const blocks = this.props.blocks.map((block) => {
      if (block.type === 'markdown') {
        return <MarkdownBlock
          index={block.index}
          content={block.content}
          onChange={this.props.onChange.bind(this)}
        />
      }
      if (block.type === 'code') {
        return <CodeBlock block={block} onChange={this.props.onChange.bind(this)}/>
      }
      return null
    })
    return <div>
      {blocks}
    </div>
  }
}
Blocks.propTypes = {
  blocks: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
