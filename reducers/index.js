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
        blocks: state.blocks.concat(Object.assign({}, consts.MARKDOWN_BLOCK, {
          index: state.blocks.length
        }))
      })
    case consts.ADD_CODE_BLOCK:
      return Object.assign({}, state, {
        blocks: state.blocks.concat(Object.assign({}, consts.CODE_BLOCK, {
          index: state.blocks.length
        }))
      })
    case consts.CHANGE_BLOCK_CONTENT:
      const block = state.blocks[action.block_index]
      const new_block = Object.assign({}, block, {content: action.content})
      const new_state = Object.assign({}, state)
      new_state.blocks[action.block_index] = new_block
      console.log('new_state')
      console.log(JSON.stringify(new_state))
      return new_state
    case consts.MOVE_BLOCK:
      const from_block = state.blocks.splice(action.from, 1)
      state.blocks.splice(action.to, 0, from_block[0])
      return state
    default:
      return state
  }
}
