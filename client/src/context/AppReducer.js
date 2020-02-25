export default (state, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        ...state,
        events: [action.payload, ...state.events]
      };

    default:
      return state;
  }
};
