import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import reducer from './reducers/reducer'

const store = createStore(reducer)

const App = () => {

  // GOOD Dispatch
  const good = () => {
    console.log('Action press --> GOOD')
    // Esto manda una accion al store --> este te manda a --> reducer
    store.dispatch({
      type: 'GOOD'
    })
  }

  // OK Dispatch
  const ok = () => {
    console.log('Action press --> OK')
    store.dispatch({
      type: 'OK'
    })
  }

  // BAD Dispatch
  const bad = () => {
    console.log('Action press --> BAD')
    store.dispatch({
      type: 'BAD'
    })
  }

  return (
    <div>
      <button onClick={good}>good</button> 
      <button onClick={ok}>ok</button> 
      <button onClick={bad}>bad</button>
      <button>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  )
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)
