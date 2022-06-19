import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const useRefreshToken = () => {
  const dispatch = useDispatch();
  const refreshToken = useSelector((state) => state.tokens.refreshToken);
  const expiresIn = useSelector((state) => state.tokens.expiresIn);

  useEffect(() => {
    const timeout = setTimeout(() => {
      axios.post("http://localhost:333/refresh", refreshToken).then((res) => {
        dispatch({ type: "SET_TOKENS", payload: res.data.accessToken });
      });

      return () => clearTimeout(timeout);
    }, (expiresIn - 120) * 1000);
  }, [refreshToken, expiresIn]);
};

export default useRefreshToken;
