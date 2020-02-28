import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

import EventPopulate from "./EventPopulate";

function Thingies() {
  const { events, fetchEvents } = useContext(GlobalContext);
  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <EventPopulate array={events} />
    </div>
  );
}

export default Thingies;
