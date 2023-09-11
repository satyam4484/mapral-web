
const initialState = {
    isLoggedIn: false,
    isLoading: false,
    
  };
  
  // Define the global reducer function that handles state updates
  const globalReducer = (state, action) => {
    switch (action.type) {
      default:
        // Return the current state if no action type matches
        return state;
    }
  };
  
  export { globalReducer, initialState };
  