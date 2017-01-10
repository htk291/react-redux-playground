export const SEND = '@@SEND'
export function send(value) {
  return { 
    type: SEND,
    value,
  }
}

export const CHANGE = '@@CHANGE'
export function change(value) {
  return {
    type: CHANGE,
    value,
  }
}
