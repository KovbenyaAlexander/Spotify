import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTokens } from "../redux/thunk";

const Dashboard = () => {
  const code = useSelector((state) => state.code);
  const dispatch = useDispatch();
  dispatch(getTokens());

  return (
    <div>
      Dashboard
      {code}
    </div>
  );
};

export default Dashboard;
