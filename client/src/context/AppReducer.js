export default (state, action) => {
  switch (action.type) {
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
    case "FETCH_ERROR":
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
