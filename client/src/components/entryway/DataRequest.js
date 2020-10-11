import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataRequest(props) {
  let [apiList, setApiList] = useState({});
  let [pathway, setPathway] = useState(props.pathway);
  const apiGetList = (pathway) => {
    axios
      .get(`/api/${pathway}`)
      .then((list) => {
        // console.log(
        //   "coming soon this will be where a prop fuction is called to re-initialis the axio request for the lates slidertext el view"
        // );
        setApiList({ list: list.data });
        props.dataRetrieve(apiList);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    apiGetList(pathway);
  }, []);

  useEffect(
    (apiList) => {
      props.dataRetrieve(apiList);
    },
    [apiList]
  );

  return <></>;
}
