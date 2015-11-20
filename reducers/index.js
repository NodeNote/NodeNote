import * as consts from '../constants'

export const initialState = {
  blocks: [
    // {
    //   type: 'markdown',
    //   text: 'Hello, **testing** this out!'
    // },
    // {
    //   type: 'code',
    //   input: 'var hello = \'world\'',
    //   output: null
    // }
  ]
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case consts.CHANGE_TEXT:
      return Object.assign({}, state, {
        text: action.text
      })
    case consts.ADD_MARKDOWN_BLOCK:
      return Object.assign({}, state, {
        blocks: state.blocks.concat(consts.MARKDOWN_BLOCK)
      })
    case consts.ADD_CODE_BLOCK:
      return Object.assign({}, state, {
        blocks: state.blocks.concat(consts.CODE_BLOCK)
      })
    case consts.CHANGE_BLOCK_CONTENT:
      const block = state.blocks[action.block_index]
      const new_block = Object.assign({}, block, {content: action.content})
      state.blocks[action.block_index] = new_block
      return Object.assign({}, state)
    default:
      return state
  }
}
