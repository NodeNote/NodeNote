import * as consts from '../constants'

export function changeText (text, cursor) {
  return {
    type: consts.CHANGE_TEXT,
    text,
    cursor: cursor
  }
}

export function addField (field_type) {
  return {
    type: consts.ADD_FIELD,
    field_type: field_type
  }
}

export function createMarkdownBlock () {
  return {
    type: consts.ADD_MARKDOWN_BLOCK
  }
}

export function createCodeBlock () {
  return {
    type: consts.ADD_CODE_BLOCK
  }
}

export function changeBlockContent (block_index, content) {
  return {
    type: consts.CHANGE_BLOCK_CONTENT,
    block_index,
    content
  }
}

export function moveBlock (from, to) {
  return {
    type: consts.MOVE_BLOCK,
    from,
    to
  }
}
