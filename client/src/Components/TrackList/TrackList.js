import React from "react";
import style from "./style.scss";
import { useDispatch, useSelector } from "react-redux";

const TrackList = ({ tracks }) => {
  console.log(tracks);
  const dispatch = useDispatch();
  const onClickTrackHandler = (track) => {
    dispatch({ type: "SET_CURRENT_TRACK_URI", payload: track.uri });
  };

  return (
    <div className="trackList">
      {tracks.map((track) => {
        return (
          <div
            className="trackList__item"
            onClick={() => onClickTrackHandler(track)}
          >
            <img src={track.album.images[2].url} alt="albumIMG" />
            <div className="trackList__item__info">
              <p>{track.name}</p>
              <p>{track.artists[0].name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackList;
