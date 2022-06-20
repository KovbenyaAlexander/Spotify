import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTokens } from "../redux/thunk";
import useRefreshToken from "../customHooks/useRefreshToken";
import TrackList from "./TrackList/TrackList";
import Player from "./Player/Player";

const Dashboard = () => {
  const SpotifyAPI = useSelector((state) => state.SpotifyAPI);
  const accessToken = useSelector((state) => state.tokens.accessToken);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const dispatch = useDispatch();
  dispatch(getTokens());
  useRefreshToken();

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (!accessToken) return;
    if (!searchText) return;
    SpotifyAPI.searchTracks(searchText).then((res) => {
      setSearchResults(res.body.tracks.items);
    });
  }, [searchText, accessToken, SpotifyAPI]);

  return (
    <div>
      <input value={searchText} onChange={handleSearch}></input>
      <TrackList tracks={searchResults} />
      <Player />
    </div>
  );
};

export default Dashboard;
