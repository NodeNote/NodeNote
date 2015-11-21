export const CHANGE_TEXT = 'CHANGE_TEXT'
export const ADD_MARKDOWN_BLOCK = 'ADD_MARKDOWN_BLOCK'
export const ADD_CODE_BLOCK = 'ADD_CODE_BLOCK'
export const CHANGE_BLOCK_CONTENT = 'CHANGE_BLOCK_CONTENT'
export const CHANGE_CODE_CONTENT = 'CHANGE_CODE_CONTENT'
export const MOVE_BLOCK = 'MOVE_BLOCK'

export const MARKDOWN_BLOCK = {
  type: 'markdown',
  content: 'Markdown goes **here**',
  index: 0
}

export const CODE_BLOCK = {
  type: 'code',
  content: 'var hello = \'world\'',
  index: 0,
  output: null,
  output_mode: 'json'
}
