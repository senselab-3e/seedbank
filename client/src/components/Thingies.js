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
      <EventPopulate array={events} className={"threshold"} randomPos={true} />
      <EventPopulate array={[1, 2, 3, 4, 5, 6]} randomPos={true} />
      <EventPopulate
        array={[1, 2, 3, 4, 5, 6]}
        className={"line"}
        randomPos={true}
      />
    </div>
  );
}

export default Thingies;
