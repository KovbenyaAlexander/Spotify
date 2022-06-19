import axios from "axios";

export const getTokens = () => {
  return (dispatch, getState) => {
    const code = getState().code;

    const refreshToken = getState().tokens.refreshToken;
    if (refreshToken) return;

    axios
      .post("http://localhost:3333/login", { code })
      .then((res) => {
        dispatch({ type: "SET_TOKENS", payload: res.data });
      })
      .catch((err) => {
        window.location = "/";
      });
  };
};
