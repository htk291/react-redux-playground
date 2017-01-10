import { UPDATE } from 'REDUX/actions'

const initialState = {
  list: [],
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      return Object.assign({}, state, {
        list: action.list
      })
  }
  return state
}