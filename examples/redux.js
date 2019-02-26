// import { createStore } from 'redux'
// import { Provider, connect } from 'react-redux'

// ### Action types ###

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'

// ### Action creators ###

const increment = (amount = 1) => {
  return {
    type: INCREMENT,
    amount: amount,
  }
}
const decrement = (amount = 1) => {
  return {
    type: DECREMENT,
    amount: amount,
  }
}
const reset = () => {
  return {
    type: RESET,
  }
}

// ### Reducer ###

const reducer = (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + action.amount
    case DECREMENT:
      return count - action.amount
    case RESET:
      return 0
    default:
      return count
  }
}

// ### Store ###

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

// ### Connectors ###

const connectCount = connect(state => {
  return {
    count: state,
  }
})

// ### React components ###

const ShowCount = connectCount(({ count }) => {
  return <p>Count: {count}</p>
})

const Increment = connect()(({ dispatch, amount = 1 }) => {
  return (
    <button
      onClick={() => {
        dispatch(increment(amount))
      }}
    >
      Increment by {amount}
    </button>
  )
})
const Decrement = connect()(({ dispatch, amount = 1 }) => {
  return (
    <button
      onClick={() => {
        dispatch(decrement(amount))
      }}
    >
      Decrement by {amount}
    </button>
  )
})
const Reset = connect()(({ dispatch }) => {
  return (
    <button
      onClick={() => {
        dispatch(reset())
      }}
    >
      reset
    </button>
  )
})
const App = () => {
  return (
    <Provider store={store}>
      <ShowCount />
      <Decrement />
      <Increment />
      <Increment amount={2} />
      <Reset />
    </Provider>
  )
}

render(<App />)
