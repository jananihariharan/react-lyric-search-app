import React, { useEffect, useState } from "react";
import axios from "axios";

const state = {
  hits: [],
  heading: "Top 10 Tracks",
};

export const Context = React.createContext();

export const Provider = (props) => {
  const [globalState, setGlobalState] = useState(state);

  useEffect(() => {
    axios
      .get(
        "https://genius-song-lyrics1.p.rapidapi.com/search/?q=thunder&per_page=10&page=1",
        {
          headers: {
            "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_GENIUS_SONG_LYRICS_API_KEY,
          },
        }
      )
      .then((res) => {
        // console.log("API Response: ", res.data);
        setGlobalState((prevState) => ({
          ...prevState,
          hits: [...res.data.hits],
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Context.Provider value={globalState}>{props.children}</Context.Provider>
  );
};
