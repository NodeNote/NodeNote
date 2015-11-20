import React, { Component } from 'react'
import { connect } from 'react-redux'
// import InputBlock from '../components/input_block'
import AddBlocksBlock from '../components/add_blocks_block'
import Blocks from '../components/blocks'
  // changeBlockContent,
import {
  createMarkdownBlock,
  createCodeBlock
} from '../actions'

export default class Notebook extends Component {
  handleOnChange (new_text) {
    this.props.dispatch({
      type: 'CHANGE_TEXT',
      text: new_text
    })
  }
  handleOnAddBlock (block_type) {
    if (block_type === 'markdown') {
      this.props.dispatch(createMarkdownBlock())
    }
    if (block_type === 'code') {
      this.props.dispatch(createCodeBlock())
    }
  }
      // <InputBlock script={this.props.text} onChange={this.handleOnChange.bind(this)}/>
  render () {
      // {JSON.stringify(this.props.blocks, null, 2)}
    return <div id='notebook'>
      <Blocks blocks={this.props.blocks}/>
      <AddBlocksBlock onAddBlock={this.handleOnAddBlock.bind(this)}/>
    </div>
  }
}

Notebook.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  blocks: React.PropTypes.array.isRequired
}

// ToDo this should be in the container
const mapStateToProps = (state) => {
  return {
    blocks: state.blocks
  }
}

export default connect(mapStateToProps)(Notebook)
