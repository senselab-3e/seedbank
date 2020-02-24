import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  events: [
    {
      name: "Amsterdam",
      location: "Amsterdam",
      event_type: "Minor Movement",
      event_start: "2019-08-24",
      event_end: "2019-08-25"
    },
    {
      name: "Digital Anthropologies #7",
      location: "Berlin",
      event_type: "Minor Movement",
      event_start: "2019-08-26",
      event_end: "2019-08-30"
    },
    {
      name: "Propositions for Social Dreaming",
      location: "São Paulo",
      event_type: "Minor Movement",
      event_start: "2019-04-22",
      event_end: "2019-05-02"
    },
    {
      name: "Budapest",
      location: "Budapest",
      event_type: "Minor Movement",
      event_start: "2019-08-30",
      event_end: "2019-09-01"
    },
    {
      name: "Infrastructures for Un/Recommoning",
      location: "Copenhagen",
      event_type: "Minor Movement",
      event_start: "2019-09-01",
      event_end: "2019-09-05"
    },
    {
      name: "Minor Movements Celebration",
      location: "Edinburgh",
      event_type: "Minor Movement",
      event_start: "2019-07-01",
      event_end: "2019-07-06"
    },
    {
      name: "Neuroqueerness and Repairing",
      location: "Helsinki",
      event_type: "Minor Movement",
      event_start: "2019-08-30",
      event_end: "2019-09-01"
    },
    {
      name: "Underspaze",
      location: "Underspaze",
      event_type: "Minor Movement",
      event_start: "2019-04-22",
      event_end: "2019-12-22"
    },
    {
      name: "Suspensions (Hanging Out and Hanging In)",
      location: "London-Manchester",
      event_type: "Minor Movement",
      event_start: "2019-09-05",
      event_end: "2019-09-07"
    },
    {
      name: "Spaze",
      location: "Spaze",
      event_type: "Minor Movement",
      event_start: "2019-04-22",
      event_end: "2019-12-22"
    },
    {
      name: "Minor Gestures",
      location: "Montreal",
      event_type: "Minor Movement",
      event_start: "2019-08-15",
      event_end: "2019-08-16"
    },
    {
      name: "Oz",
      location: "Oz",
      event_type: "Minor Movement",
      event_start: "2019-11-11",
      event_end: "2019-12-22"
    },
    {
      name: "Instituent Noise and the Sensibility Soup for Collective Care",
      location: "Zurich",
      event_type: "Minor Movement",
      event_start: "2019-07-05",
      event_end: "2019-07-08"
    },
    {
      name: "Means of Relation",
      location: "Cluj",
      event_type: "Minor Movement",
      event_start: "2019-09-09",
      event_end: "2019-09-11"
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        events: state.events
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
