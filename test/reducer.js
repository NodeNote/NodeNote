/* global describe, it */
import { reducer, initialState } from '../reducers'
import {
  createMarkdownBlock,
  changeBlockContent,
  createCodeBlock
} from '../actions'
import assert from 'assert'

describe('reducer', () => {
  it('Starts with zero blocks', () => {
    const output_state = reducer(initialState, {type: null})
    assert.equal(output_state.blocks.length, 0)
  })
  it('Can add three blocks', () => {
    const action = createMarkdownBlock()
    
    const output_state =
    reducer(reducer(reducer(initialState, action), action), action)

    assert.equal(output_state.blocks.length, 3)
  })
  describe('Markdown blocks', () => {
    it('Add a markdown block', () => {
      const action = createMarkdownBlock()
      const output_state = reducer(initialState, action)
      assert.equal(output_state.blocks.length, 1)
      assert.equal(output_state.blocks[0].type, 'markdown')
      assert.equal(output_state.blocks[0].content, null)
    })
    it('Change content of a added markdown block', () => {
      const add_action = createMarkdownBlock()
      const state = reducer(initialState, add_action)
      const change_action = changeBlockContent(0, 'Hello World')
      const output_state = reducer(state, change_action)
      assert.equal(output_state.blocks.length, 1)
      assert.equal(output_state.blocks[0].type, 'markdown')
      assert.equal(output_state.blocks[0].content, 'Hello World')
    })
  })
  describe('Code blocks', () => {
    it('Add a code block', () => {
      const action = createCodeBlock()
      const output_state = reducer(initialState, action)
      assert.equal(output_state.blocks.length, 1)
      assert.equal(output_state.blocks[0].type, 'code')
      assert.equal(output_state.blocks[0].content, null)
      assert.equal(output_state.blocks[0].output, null)
      assert.equal(output_state.blocks[0].output_mode, 'json')
    })
    it('Change content of a added code block', () => {
      const add_action = createCodeBlock()
      const state = reducer(initialState, add_action)
      const change_action = changeBlockContent(0, 'Hello World')
      const output_state = reducer(state, change_action)
      assert.equal(output_state.blocks.length, 1)
      assert.equal(output_state.blocks[0].type, 'code')
      assert.equal(output_state.blocks[0].content, 'Hello World')
      assert.equal(output_state.blocks[0].output, null)
      assert.equal(output_state.blocks[0].output_mode, 'json')
    })
  })
})
