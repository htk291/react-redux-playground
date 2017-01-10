import { CHANGE } from 'REDUX/actions'

const initialState = {
  value: "",
  isValid: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE:
      return Object.assign({}, state, {
        value: action.value,
        isValid: /^[a-z\d]{8,100}$/.test(action.value)
      })
  }
  return state
}