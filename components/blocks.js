import React, { Component, PropTypes } from 'react'
import MarkdownBlock from './markdown_block'
import CodeBlock from './code_block'

export default class Blocks extends Component {
  render () {
    const blocks = this.props.blocks.map((block) => {
      if (block.type === 'markdown') {
        return <MarkdownBlock block={block} onChange={(content) => {
            this.props.onChange(content)
          }}/>
      }
      if (block.type === 'code') {
        return <CodeBlock block={block}/>
      }
      return null
    })
    return <div>
      {blocks}
    </div>
  }
}
Blocks.propTypes = {
  blocks: PropTypes.array.isRequired
}
