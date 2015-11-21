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
      assert.equal(output_state.get('blocks').size, 0)
    })
    it('Can add three blocks', () => {
      const action = createMarkdownBlock()

      const output_state =
      reducer(reducer(reducer(initialState, action), action), action)

      assert.equal(output_state.get('blocks').size, 3)
      assert.equal(output_state.get('blocks').get(0).get('index'), 0)
      assert.equal(output_state.get('blocks').get(1).get('index'), 1)
      assert.equal(output_state.get('blocks').get(2).get('index'), 2)
    })
    it('Can move blocks', () => {
      let state = reducer(initialState, createMarkdownBlock())
      state = reducer(state, createCodeBlock())
      state = reducer(state, createCodeBlock())

      assert.equal(state.get('blocks').get(0).get('type'), 'markdown')
      assert.equal(state.get('blocks').get(1).get('type'), 'code')
      assert.equal(state.get('blocks').get(2).get('type'), 'code')

      state = reducer(state, moveBlock(0, 1))

      assert.equal(state.get('blocks').get(0).get('type'), 'code')
      assert.equal(state.get('blocks').get(1).get('type'), 'markdown')
      assert.equal(state.get('blocks').get(2).get('type'), 'code')
    })
    describe('Markdown blocks', () => {
      it('Add a markdown block', () => {
        const action = createMarkdownBlock()
        const output_state = reducer(initialState, action)
        assert.equal(output_state.get('blocks').size, 1)
        assert.equal(output_state.get('blocks').get(0).get('type'), 'markdown')
        assert.equal(output_state.get('blocks').get(0).get('content'), 'Markdown goes **here**')
        assert.equal(output_state.get('blocks').get(0).get('index'), 0)
      })
      it('Change content of a added markdown block', () => {
        const add_action = createMarkdownBlock()
        const state = reducer(initialState, add_action)
        const change_action = changeBlockContent(0, 'Hello World')
        const output_state = reducer(state, change_action)
        assert.equal(output_state.get('blocks').size, 1)
        assert.equal(output_state.get('blocks').get(0).get('type'), 'markdown')
        assert.equal(output_state.get('blocks').get(0).get('content'), 'Hello World')
        assert.equal(output_state.get('blocks').get(0).get('index'), 0)
      })
    })
    describe('Code blocks', () => {
      it('Add a code block', () => {
        const action = createCodeBlock()
        const output_state = reducer(initialState, action)
        assert.equal(output_state.get('blocks').size, 1)
        assert.equal(output_state.get('blocks').get(0).get('type'), 'code')
        assert.equal(output_state.get('blocks').get(0).get('content'), 'var hello = \'world\'')
        assert.equal(output_state.get('blocks').get(0).get('index'), 0)
        assert.equal(output_state.get('blocks').get(0).get('output'), null)
        assert.equal(output_state.get('blocks').get(0).get('output_mode'), 'json')
      })
      it('Change content of a added code block', () => {
        const add_action = createCodeBlock()
        const state = reducer(initialState, add_action)
        const change_action = changeBlockContent(0, 'Hello World')
        const output_state = reducer(state, change_action)
        assert.equal(output_state.get('blocks').size, 1)
        assert.equal(output_state.get('blocks').get(0).get('type'), 'code')
        assert.equal(output_state.get('blocks').get(0).get('content'), 'Hello World')
        assert.equal(output_state.get('blocks').get(0).get('index'), 0)
        assert.equal(output_state.get('blocks').get(0).get('output'), null)
        assert.equal(output_state.get('blocks').get(0).get('output_mode'), 'json')
      })
    })
  })
})
