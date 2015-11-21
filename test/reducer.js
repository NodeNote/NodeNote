/* global describe, it */
import { reducer, initialState } from '../reducers'
import {
  createMarkdownBlock,
  changeBlockContent,
  createCodeBlock,
  moveBlock
} from '../actions'
import assert from 'assert'

describe('reducer', () => {
  describe('blocks', () => {
    it('Starts with zero blocks', () => {
      const output_state = reducer(initialState, {type: null})
      assert.equal(output_state.blocks.length, 0)
    })
    it('Can add three blocks', () => {
      const action = createMarkdownBlock()

      const output_state =
      reducer(reducer(reducer(initialState, action), action), action)

      assert.equal(output_state.blocks.length, 3)
      assert.equal(output_state.blocks[0].index, 0)
      assert.equal(output_state.blocks[1].index, 1)
      assert.equal(output_state.blocks[2].index, 2)
    })
    it('Can move blocks', () => {
      let state = reducer(initialState, createMarkdownBlock())
      state = reducer(state, createCodeBlock())
      state = reducer(state, createCodeBlock())
      state = reducer(state, changeBlockContent(0, 'Markdown'))
      state = reducer(state, changeBlockContent(1, 'Code'))

      assert.equal(state.blocks[0].type, 'markdown')
      assert.equal(state.blocks[0].content, 'Markdown')
      assert.equal(state.blocks[1].type, 'code')
      assert.equal(state.blocks[1].content, 'Code')

      state = reducer(state, moveBlock(0, 1))

      assert.equal(state.blocks[0].type, 'code')
      assert.equal(state.blocks[0].content, 'Code')
      assert.equal(state.blocks[1].type, 'markdown')
      assert.equal(state.blocks[1].content, 'Markdown')
    })
    describe('Markdown blocks', () => {
      it('Add a markdown block', () => {
        const action = createMarkdownBlock()
        const output_state = reducer(initialState, action)
        assert.equal(output_state.blocks.length, 1)
        assert.equal(output_state.blocks[0].type, 'markdown')
        assert.equal(output_state.blocks[0].content, 'Markdown goes **here**')
        assert.equal(output_state.blocks[0].index, 0)
      })
      it('Change content of a added markdown block', () => {
        const add_action = createMarkdownBlock()
        const state = reducer(initialState, add_action)
        const change_action = changeBlockContent(0, 'Hello World')
        const output_state = reducer(state, change_action)
        assert.equal(output_state.blocks.length, 1)
        assert.equal(output_state.blocks[0].type, 'markdown')
        assert.equal(output_state.blocks[0].content, 'Hello World')
        assert.equal(output_state.blocks[0].index, 0)
      })
    })
    describe('Code blocks', () => {
      it('Add a code block', () => {
        const action = createCodeBlock()
        const output_state = reducer(initialState, action)
        assert.equal(output_state.blocks.length, 1)
        assert.equal(output_state.blocks[0].type, 'code')
        assert.equal(output_state.blocks[0].content, 'var hello = \'world\'')
        assert.equal(output_state.blocks[0].index, 0)
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
        assert.equal(output_state.blocks[0].index, 0)
        assert.equal(output_state.blocks[0].output, null)
        assert.equal(output_state.blocks[0].output_mode, 'json')
      })
    })
  })
})
