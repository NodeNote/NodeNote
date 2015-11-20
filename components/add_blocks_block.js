import React, { Component, PropTypes } from 'react'

export default class AddBlocksBlock extends Component {
  render () {
    return <div>
      <div>
        <button onClick={() => {
          this.props.onAddBlock('markdown')
        }}>Add Markdown Block</button>
      </div>
      <div>
        <button onClick={() => {
          this.props.onAddBlock('code')
        }}>Add Code Block</button>
      </div>
    </div>
  }
}
AddBlocksBlock.propTypes = {
  onAddBlock: PropTypes.func.isRequired
}
