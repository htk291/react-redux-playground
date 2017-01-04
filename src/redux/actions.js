/**
 * action types
 */
export const SEND = '@@SEND'
export const CHANGE = '@@CHANGE'

/**
 * action creators
 */
export function send(value) {
  return {
    type: SEND,
    value,
  }
}
export function change(value) {
  return {
    type: CHANGE,
    value,
  }
}
