import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const refreshToken = useSelector((state) => state.tokens.refreshToken);
  const expiresIn = useSelector((state) => state.tokens.expiresIn);

  useEffect(() => {
    if (!refreshToken) return;
    const interval = setInterval(() => {
      axios
        .post("http://localhost:3333/refresh", { refreshToken })
        .then((res) => {
          console.log(res);

          dispatch({
            type: "SET_TOKENS",
            payload: {
              accessToken: res.data.accessToken,
              expiresIn: res.data.expiresIn,
            },
          });
        });

      return () => clearInterval(interval);
    }, (expiresIn - 120) * 1000);
  }, [refreshToken, expiresIn]);
};

export default useRefreshToken;
