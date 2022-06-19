import React from "react";

const TrackList = ({ tracks }) => {
  console.log(tracks);

  return (
    <div>
      {tracks.map((track) => {
        return (
          <div>
            <img src={track.album.images[2].url} alt="albumIMG" />
            <h3>{track.name}</h3>
            <p>{track.artists[0].name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrackList;
