import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
//eventually replace id numbering with uuid generator

//NOTES: Hooks can only be called inside of the body of a function component.

//example of events object key values as constructed in database: {
//   id: 12,
//   name: "Means of Relation",
//   location: "Cluj",
//   event_type: "Minor Movement",
//   event_start: "2019-09-09",
//   event_end: "2019-09-11"
// }

const initialState = {
  events: [],
  error: null,
  loading: true
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  async function fetchEvents() {
    try {
      const res = await axios.get("/api/events");
      dispatch({
        type: "FETCH_EVENTS",
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.response.data.error
      });
    }
  }
  //local data test only
  //   function addEvent(id) {
  //     dispatch({
  //       type: "ADD_EVENT",
  //       payload: id
  //     });
  //   }

  return (
    <GlobalContext.Provider
      value={{
        events: state.events,
        error: state.error,
        loading: state.loading,
        fetchEvents
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
