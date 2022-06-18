import axios from "axios";

export const getTokens = () => {
  return (dispatch, getState) => {
    console.log(`thunk`);

    const code = getState().code;
    axios.get("http://localhost:3333/login", { code }).then((res) => {
      console.log(res.data);
    });
  };
};
