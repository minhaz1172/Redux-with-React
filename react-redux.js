const redux = require('redux');

// Initial state of the application
const initial = { counter: 2 };

// Reducer function: takes the current state and an action, and returns a new state
const reducer = (state = initial, action) => {
  // Check the action type and update the state accordingly
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1 };

  }
}
const store = redux.createStore(reducer);

// Subscriber function: gets the current state from the store and logs it
const subscriber = () => {
  const state = store.getState();  // Get the current state from the store
  console.log(state);  // Log the current state to the console
}

// Subscribe the subscriber function to the store
store.subscribe(subscriber);

// Dispatch an action of type 'INCREMENT' to update the state
store.dispatch({
  type: 'INCREMENT'
})