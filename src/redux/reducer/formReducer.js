const SEND = '@@SEND'

const initialState = {
  value: null,
}

export default function formReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEND:
      return Object.assign({}, state, {
        value: action.value,
      })
  }
  return state
}