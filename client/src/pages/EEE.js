import React, { useContext } from "react";
import Eee00 from "../404s/Eee00";
import { GlobalContext } from "../context/GlobalState";

export default function EeE() {
  const { themeName } = useContext(GlobalContext);

  return (
    <div>
      hello my name is {themeName}
      <Eee00 />
      apples
    </div>
  );
}
