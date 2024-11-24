import { createStore, applyMiddleware } from "redux";
import { combineReducer } from "./reducer";
import { thunk } from "redux-thunk";

// Function to save state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.error("Could not save state", e);
  }
};

// Function to load state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined; // Return undefined to use the initial state
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state", e);
    return undefined;
  }
};

// Load the state from localStorage
const persistedState = loadStateFromLocalStorage();

// Create store with persisted state
const store = createStore(
  combineReducer,
  persistedState,
  applyMiddleware(thunk)
);

// Subscribe to store changes to save the updated state
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
