import * as consts from '../constants'
import Immutable from 'immutable'

export const initialState = Immutable.Map({
  blocks: Immutable.List()
})

const action_map = {
  [consts.ADD_MARKDOWN_BLOCK]: (state, action) => {
    const blocks = state.get('blocks')
    const new_block = consts.MARKDOWN_BLOCK.set('index', blocks.size)
    return state.set('blocks', blocks.push(new_block))
  },
  [consts.ADD_CODE_BLOCK]: (state, action) => {
    const blocks = state.get('blocks')
    const new_block = consts.CODE_BLOCK.set('index', blocks.size)
    return state.set('blocks', blocks.push(new_block))
  },
  [consts.CHANGE_BLOCK_CONTENT]: (state, action) => {
    const block = state.get('blocks').get(action.block_index)
    const new_block = block.set('content', action.content)
    const new_blocks = state.get('blocks').set(action.block_index, new_block)
    return state.set('blocks', new_blocks)
  },
  [consts.MOVE_BLOCK]: (state, action) => {
    const from_block = state.get('blocks').get(action.from)
    const new_blocks = state.get('blocks').delete(action.from).splice(action.to, 0, from_block)
    return state.set('blocks', new_blocks)
  }
}

export function reducer (state = initialState, action) {
  if (action_map[action.type] !== undefined) {
    return action_map[action.type](state, action)
  } else {
    return state
  }
}
