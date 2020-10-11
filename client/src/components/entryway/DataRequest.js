import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataRequest(props) {
  // eslint-disable-next-line
  let [apiList, setApiList] = useState({});
  // eslint-disable-next-line
  let [pathway, setPathway] = useState(props.pathway);
  const apiGetList = (pathway) => {
    axios
      .get(`/api/${pathway}`)
      .then((list) => {
        setApiList({ list: list.data });
        props.dataRetrieve({ list: list.data });
      })
      .catch((err) => console.log(err));
  };
  //console.log("DATAREQ level: ", apiList);
  // eslint-disable-next-line
  useEffect(() => {
    apiGetList(pathway);
  }, [pathway]);

  return <></>;
}
