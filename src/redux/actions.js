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

export const UPDATE = '@@UPDATE'
export function update(list) {
  return {
    type: UPDATE,
    list,
  }
}

export const OPEN_MODAL = '@@OPEN_MODAL'
export function toggleModal(isOpen) {
  return {
    type: OPEN_MODAL,
    isOpen,
  }
}

export const ANIMATION = '@@ANIMATION'
export function animate(value) {
  return {
    type: ANIMATION,
    value,
  }
}