import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
//eventually replace id numbering with uuid generator

// EDIT

// What you need to make sure is that the components are rendered as children of the ContextProvider
//component and you are passing handlers to it instead of rendering them inline and updating
//the state of ContextProvider because that will trigger a re-render of all components
//that are within the ContextProvider

const initialState = {
  events: [],
  error: null,
  loading: true
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  //NOTE: await blocks JavaScript from executing the next line of code until a promise resolves. This may have the unintended consequence of slowing down code execution.
  //A promise is an object that will return a value in future. Because of this “in future” thing, Promises are well suited for asynchronous JavaScript operations.
  //references: https://zellwk.com/blog/async-await/   || https://zellwk.com/blog/js-promises/

  //res.data is confirmed. why? otherwise the fetch list which uses the exact key.values with id and name etc wouldn't work.
  async function fetchEvents() {
    try {
      const res = await axios.get("/api/events4context");
      dispatch({
        type: "FETCH_EVENTS",
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  async function addEvent(event) {
    const config = {
      //i don't know if this is necessary -- removing or adding it makes no difference
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      //const res = await axios.post("/api/events", event);
      const res = await axios.post("/api/events4context", event, config);
      console.log(res.data);
      //because it's never receiving a response from the server, it doesn't end up passing a dispatch.
      //in prior versions i had res.data ---
      dispatch({
        type: "ADD_EVENT",
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  //NOTE: a route for deleting events does not yet exist
  async function deleteEvent(id) {
    console.log(id);
    try {
      await axios.delete(`/api/events4context/${id}`);

      dispatch({
        type: "DELETE_EVENT",
        payload: id
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        events: state.events,
        error: state.error,
        loading: state.loading,
        fetchEvents,
        addEvent,
        deleteEvent
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
