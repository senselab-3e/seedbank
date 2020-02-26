export default (state, action) => {
  switch (action.type) {
    //this was written for local add event testing ---
    // case "ADD_EVENT":
    //   return {
    //     ...state,
    //     events: [action.payload, ...state.events]
    //   };
    case "FETCH_EVENTS":
      return {
        ...state,
        loading: false,
        events: action.payload
      };
    case "ADD_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload)
      };
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
