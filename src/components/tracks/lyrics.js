import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../layout/spinner";
import { Link } from "react-router-dom";

export default function Lyrics() {
  const { id } = useParams();
  const [lyrics, setLyrics] = useState();
  const [songDetails, setSongDetails] = useState();

  const { tracking_data: { title = "", primary_artist = "" } = {} } =
    lyrics || {};

  useEffect(() => {
    axios
      .get(`https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=${id}`, {
        headers: {
          "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_GENIUS_SONG_LYRICS_API_KEY,
        },
      })
      .then((res) => {
        // console.log("Lyrics API Response: ", res.data);
        setLyrics(res.data?.lyrics);
        return axios.get(
          `https://genius-song-lyrics1.p.rapidapi.com/song/details/?id=${id}`,
          {
            headers: {
              "x-rapidapi-host": "genius-song-lyrics1.p.rapidapi.com",
              "x-rapidapi-key":
                process.env.REACT_APP_GENIUS_SONG_LYRICS_API_KEY,
            },
          }
        );
      })
      .then((res) => {
        console.log(`Song Details API Response: `, res.data);
        setSongDetails(res.data.song);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {lyrics &&
      Object.keys(lyrics).length !== 0 &&
      songDetails &&
      Object.keys(songDetails).length !== 0 ? (
        <>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {title} by{" "}
              <span className="text-secondary">{primary_artist}</span>
            </h5>
            <div className="card-body">
              <ul className="list-group mt-3">
                <li className="list-group-item">
                  <strong>Apple Music Link</strong>:{" "}
                  <a href={songDetails.apple_music_player_url}>
                    {songDetails.apple_music_player_url}
                  </a>
                </li>

                <li className="list-group-item">
                  <strong>Apple Music Id</strong>: {songDetails.apple_music_id}
                </li>

                <li className="list-group-item">
                  <strong>Release date:</strong>:{" "}
                  {songDetails.release_date_for_display}
                </li>

                <li className="list-group-item">
                  <strong>About the song</strong>:{" "}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: songDetails?.description?.html,
                    }}
                  />
                </li>
              </ul>

              <div className="card-text">
                <strong></strong>
              </div>
              <div className="card-text">
                <strong>Lyrics</strong>
                <div
                  dangerouslySetInnerHTML={{ __html: lyrics.lyrics.body.html }}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
