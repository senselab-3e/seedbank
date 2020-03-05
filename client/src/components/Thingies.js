import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ArrayOptions, imgThingies } from "../helpers/ArrayOptions";

import EventPopulate from "./EventPopulate";

function Thingies() {
  const { events, fetchEvents } = useContext(GlobalContext);

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   <ArrayOptions array="testArray" />;
  //   let choosenArray = ArrayOptions("thingies");
  //   console.log(choosenArray); ---> this is all i need now to retreive the array of images pathway values now

  //name was a quick prop add last night to track the type of array it is handling/retreiving
  //NOTE: investigate why prop link is always testing positive. truthy tests in the pop components might also all be returning true because i'm no longer doing props.name --
  return (
    <div>
      <EventPopulate array={events} className={"threshold"} randomPos={true} />
      <EventPopulate array={[1, 2, 3, 4, 5, 6]} randomPos={false} />
      <EventPopulate
        array={imgThingies}
        className={"line"}
        randomPos={true}
        link={true}
      />
      <EventPopulate
        array={ArrayOptions("thingies")}
        name="thingies"
        className={"easeLarger"}
        randomPos={true}
        image={true}
      />
      <EventPopulate
        array={ArrayOptions("boundthingies")}
        name="bound"
        className={"easeLarger"}
        randomPos={true}
        image={true}
      />
      <EventPopulate
        array={events}
        className={"defaultTxt"}
        randomPos={true}
        text={true}
      />
      <EventPopulate
        array={ArrayOptions("testArray")}
        className={"defaultTxt"}
        randomPos={true}
        text={true}
        image={true}
      />
    </div>
  );
}

export default Thingies;
