const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log('Action --> ', action)
  switch (action.type) {
    case 'GOOD':
      console.log('GOOD --> ' + (state.good + 1) )
      return {
        ...state,
        good: state.good + 1 
      }
    case 'OK':
      console.log('OK --> ' + (state + 1) )
      return {
        ...state,
        ok: state.ok + 1
      }
    case 'BAD':
      console.log('BAD --> ' + (state + 1) )
      return {
        ...state,
        bad: state.bad + 1
      }
    case 'ZERO':
      console.log('ZERO --> ' + (state = 0) )
      return {
        ...state
      }
    case 'DO_NOTHING':
      console.log('DO_NOTHING --> ', state)
      return state
    default: return state
  }
  
}

export default counterReducer
