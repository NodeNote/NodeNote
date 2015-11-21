import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddBlocksBlock from '../components/add_blocks_block'
import Blocks from '../components/blocks'
import {
  createMarkdownBlock,
  createCodeBlock,
  changeBlockContent
} from '../actions'

export default class Notebook extends Component {
  handleOnChange (index, new_text) {
    this.props.dispatch(changeBlockContent(index, new_text))
  }
  handleOnAddBlock (block_type) {
    if (block_type === 'markdown') {
      this.props.dispatch(createMarkdownBlock())
    }
    if (block_type === 'code') {
      this.props.dispatch(createCodeBlock())
    }
  }
  render () {
    return <div id='notebook'>
      <Blocks blocks={this.props.blocks} onChange={this.handleOnChange.bind(this)}/>
      <AddBlocksBlock onAddBlock={this.handleOnAddBlock.bind(this)}/>
    </div>
  }
}

Notebook.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  blocks: React.PropTypes.object.isRequired
}

// ToDo this should be in the container
const mapStateToProps = (state) => {
  return {
    blocks: state.get('blocks')
  }
}

export default connect(mapStateToProps)(Notebook)
