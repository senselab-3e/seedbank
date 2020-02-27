export default (state, action) => {
  console.log("helllo?");
  switch (action.type) {
    case "FETCH_EVENTS":
      console.log("fetching event", action.payload);
      return {
        ...state,
        loading: false,
        events: action.payload
      };
    case "ADD_EVENT":
      console.log("adding event", action.payload);
      //the value of action payload is printing "Created" -- but this is based on what the events api is sending back
      return {
        ...state,
        events: [...state.events, action.payload]
      };
    case "DELETE_EVENT":
      console.log("deleting event");
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
      console.log("passing to default");
      return state;
  }
};
