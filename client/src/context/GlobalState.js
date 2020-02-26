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

//strange bug encountered when i move from deleting an event to adding an event. if i go from adding an event, to deleting it works fine. but when i go back to adding an event following a delete i stalls out. at first it seems like nothing is happening for about 3-5 min but then i get erros in the console saying xhr.js:178 POST http://localhost:3001/api/events net::ERR_EMPTY_RESPONSE
//terminal 44
//xhr.js:178 POST http://localhost:3001/api/events net::ERR_EMPTY_RESPONSE
// (anonymous) @ xhr.js:178
// e.exports @ xhr.js:12
// e.exports @ dispatchRequest.js:50
// Promise.then (async)
// u.request @ Axios.js:61
// r.forEach.u.<computed> @ Axios.js:86
// (anonymous) @ bind.js:9
// (anonymous) @ GlobalState.js:60
// u @ runtime.js:45
// (anonymous) @ runtime.js:271
// forEach.e.<computed> @ runtime.js:97
// r @ asyncToGenerator.js:3
// l @ asyncToGenerator.js:25
// (anonymous) @ asyncToGenerator.js:32
// (anonymous) @ asyncToGenerator.js:21
// s @ GlobalState.js:26
// addEvent @ GlobalState.js:26
// onSubmit @ AddEvent.js:35
// m @ react-dom.production.min.js:15
// k @ react-dom.production.min.js:15
// (anonymous) @ react-dom.production.min.js:16
// S @ react-dom.production.min.js:16
// O @ react-dom.production.min.js:17
// P @ react-dom.production.min.js:17
// N @ react-dom.production.min.js:17
// En @ react-dom.production.min.js:81
// ce @ react-dom.production.min.js:285
// On @ react-dom.production.min.js:83
// jn @ react-dom.production.min.js:84
// Nn @ react-dom.production.min.js:84
// t.unstable_runWithPriority @ scheduler.production.min.js:18
// Ho @ react-dom.production.min.js:120
// le @ react-dom.production.min.js:285
// Pn @ react-dom.production.min.js:82
// GlobalState.js:68 Uncaught (in promise) TypeError: Cannot read property 'data' of undefined
//     at GlobalState.js:68
//     at u (runtime.js:45)
//     at Generator._invoke (runtime.js:271)
//     at Generator.forEach.e.<computed> [as throw] (runtime.js:97)
//     at r (asyncToGenerator.js:3)
//     at u (asyncToGenerator.js:29)
// (anonymous) @ GlobalState.js:68
// u @ runtime.js:45
// (anonymous) @ runtime.js:271
// forEach.e.<computed> @ runtime.js:97
// r @ asyncToGenerator.js:3
// u @ asyncToGenerator.js:29
// Promise.then (async)
// r @ asyncToGenerator.js:13
// l @ asyncToGenerator.js:25
// (anonymous) @ asyncToGenerator.js:32
// (anonymous) @ asyncToGenerator.js:21
// s @ GlobalState.js:26
// addEvent @ GlobalState.js:26
// onSubmit @ AddEvent.js:35
// m @ react-dom.production.min.js:15
// k @ react-dom.production.min.js:15
// (anonymous) @ react-dom.production.min.js:16
// S @ react-dom.production.min.js:16
// O @ react-dom.production.min.js:17
// P @ react-dom.production.min.js:17
// N @ react-dom.production.min.js:17
// En @ react-dom.production.min.js:81
// ce @ react-dom.production.min.js:285
// On @ react-dom.production.min.js:83
// jn @ react-dom.production.min.js:84
// Nn @ react-dom.production.min.js:84
// t.unstable_runWithPriority @ scheduler.production.min.js:18
// Ho @ react-dom.production.min.js:120
// le @ react-dom.production.min.js:285
// Pn @ react-dom.production.min.js:82
// xhr.js:178 DELETE http://localhost:3001/api/events/44 net::ERR_EMPTY_RESPONSE
// (anonymous) @ xhr.js:178
// e.exports @ xhr.js:12
// e.exports @ dispatchRequest.js:50
// Promise.then (async)
// u.request @ Axios.js:61
// r.forEach.u.<computed> @ Axios.js:76
// (anonymous) @ bind.js:9
// (anonymous) @ GlobalState.js:77
// u @ runtime.js:45
// (anonymous) @ runtime.js:271
// forEach.e.<computed> @ runtime.js:97
// r @ asyncToGenerator.js:3
// l @ asyncToGenerator.js:25
// (anonymous) @ asyncToGenerator.js:32
// (anonymous) @ asyncToGenerator.js:21
// i @ GlobalState.js:26
// deleteEvent @ GlobalState.js:26
// onClick @ Event.js:8
// m @ react-dom.production.min.js:15
// k @ react-dom.production.min.js:15
// (anonymous) @ react-dom.production.min.js:16
// S @ react-dom.production.min.js:16
// O @ react-dom.production.min.js:17
// P @ react-dom.production.min.js:17
// N @ react-dom.production.min.js:17
// En @ react-dom.production.min.js:81
// ce @ react-dom.production.min.js:285
// On @ react-dom.production.min.js:83
// jn @ react-dom.production.min.js:84
// Nn @ react-dom.production.min.js:84
// t.unstable_runWithPriority @ scheduler.production.min.js:18
// Ho @ react-dom.production.min.js:120
// le @ react-dom.production.min.js:285
// Pn @ react-dom.production.min.js:82
// GlobalState.js:86 Uncaught (in promise) TypeError: Cannot read property 'data' of undefined
//     at GlobalState.js:86
//     at u (runtime.js:45)
//     at Generator._invoke (runtime.js:271)
//     at Generator.forEach.e.<computed> [as throw] (runtime.js:97)
//     at r (asyncToGenerator.js:3)
//     at u (asyncToGenerator.js:29)
// (anonymous) @ GlobalState.js:86
// u @ runtime.js:45
// (anonymous) @ runtime.js:271
// forEach.e.<computed> @ runtime.js:97
// r @ asyncToGenerator.js:3
// u @ asyncToGenerator.js:29
// Promise.then (async)
// r @ asyncToGenerator.js:13
// l @ asyncToGenerator.js:25
// (anonymous) @ asyncToGenerator.js:32
// (anonymous) @ asyncToGenerator.js:21
// i @ GlobalState.js:26
// deleteEvent @ GlobalState.js:26
// onClick @ Event.js:8
// m @ react-dom.production.min.js:15
// k @ react-dom.production.min.js:15
// (anonymous) @ react-dom.production.min.js:16
// S @ react-dom.production.min.js:16
// O @ react-dom.production.min.js:17
// P @ react-dom.production.min.js:17
// N @ react-dom.production.min.js:17
// En @ react-dom.production.min.js:81
// ce @ react-dom.production.min.js:285
// On @ react-dom.production.min.js:83
// jn @ react-dom.production.min.js:84
// Nn @ react-dom.production.min.js:84
// t.unstable_runWithPriority @ scheduler.production.min.js:18
// Ho @ react-dom.production.min.js:120
// le @ react-dom.production.min.js:285
// Pn @ react-dom.production.min.js:82
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

  async function fetchEvents() {
    try {
      const res = await axios.get("/api/events");
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
      const res = await axios.post("/api/events", event, config);
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
      await axios.delete(`/api/events/${id}`);

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
