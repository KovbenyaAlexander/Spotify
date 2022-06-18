import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  const dispatch = useDispatch();
  if (code) {
    dispatch({ type: "LOGIN", code });
  }

  return code ? <Dashboard /> : <Login />;
}

export default App;
