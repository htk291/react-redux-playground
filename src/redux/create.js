import { createStore as _createStore } from 'redux'

export default function createStore(history, client, data) {
  const reducer = require('REDUX/reducer')
  const store = _createStore(reducer, data)

  return store
}