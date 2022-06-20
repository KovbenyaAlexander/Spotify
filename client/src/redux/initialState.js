import SpotifyWebApi from "spotify-web-api-node";

const SpotifyAPI = new SpotifyWebApi();

export const initialState = {
  code: "",
  SpotifyAPI,
  currentTrackUri: "",
  tokens: {
    accessToken: "",
    refreshToken: "",
    expiresIn: "",
  },
};
