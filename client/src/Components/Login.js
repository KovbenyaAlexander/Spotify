import React from "react";

const Login = () => {
  const HOME_URL = `http://localhost:3000`;
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=79daaec6f4e74079b6ab2038dd0d8508&response_type=code&redirect_uri=${HOME_URL}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

  return (
    <div>
      <a href={AUTH_URL}>Login with Spotify</a>
    </div>
  );
};

export default Login;
