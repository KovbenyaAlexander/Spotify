const express = require("express");
const SpotifyAPI = require("spotify-web-api-node");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyAPI({
    clientId: "79daaec6f4e74079b6ab2038dd0d8508",
    clientSecret: "a1586374f72b450fa8edf8a6006288c6",
    redirectUri: "http://localhost:3000",
    refreshToken,
  });

  spotifyApi.refreshAccessToken().then((data) => {
    console.log(data.body);
    res.json({
      accessToken: data.body.access_token,
      expiresIn: data.body.expires_in,
    });
  });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyAPI({
    clientId: "79daaec6f4e74079b6ab2038dd0d8508",
    clientSecret: "a1586374f72b450fa8edf8a6006288c6",
    redirectUri: "http://localhost:3000",
  });

  spotifyApi.authorizationCodeGrant(code).then((data) => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    });
  });
});

app.listen(3333);
