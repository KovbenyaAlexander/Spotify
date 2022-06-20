import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useSelector } from "react-redux";

const Player = ({ trackUri }) => {
  const accessToken = useSelector((state) => state.tokens.accessToken);
  const currentTrackUri = useSelector((state) => state.currentTrackUri);
  if (!accessToken) return null;

  return (
    <div>
      <SpotifyPlayer token={accessToken} uris={currentTrackUri} play={true} />
    </div>
  );
};

export default Player;
