import { SEND } from 'REDUX/actions'

const initialState = {
  value: '',
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEND:
      return Object.assign({}, state, {
        value: action.value,
      })
  }
  return state
}