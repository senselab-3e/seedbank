import React from 'react'
import axios from 'axios'

export default function DataRequest()props {
  let [apiList, setApiList] = useState({});
  let [pathway, setPathway] = useState(props.pathway)
    const apiGetList = (pathway) => {
      axios
        .get(`/api/${pathway}`)
        .then((list) => {
          // console.log(
          //   "coming soon this will be where a prop fuction is called to re-initialis the axio request for the lates slidertext el view"
          // );
          setApiList({ list: list.data });
        })
        .catch((err) => console.log(err));
    };
    useEffect(() => {
      apiGetList("sliderTexts");
    }, []);

    useEffect(() => {
      setPalNum(props.paletteNum);
    }, [props.paletteNum]);

    console.log(apiList);

    return (
        <div>
            {apiList}
        </div>
    )
}
