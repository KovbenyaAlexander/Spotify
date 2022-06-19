import React from "react";
import { useDispatch } from "react-redux";
import { getTokens } from "../redux/thunk";
import useRefreshToken from "../customHooks/useRefreshToken";

const Dashboard = () => {
  const dispatch = useDispatch();
  dispatch(getTokens());
  useRefreshToken();

  return <div>Dashboard</div>;
};

export default React.memo(Dashboard);
