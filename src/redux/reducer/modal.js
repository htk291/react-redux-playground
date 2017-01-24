import { OPEN_MODAL } from 'REDUX/actions'

const initialState = {
  isOpen: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {
        isOpen: !state.isOpen,
      })
  }
  return state
}