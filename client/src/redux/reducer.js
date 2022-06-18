const initialState = {
  code: "",
};

export default function reducer(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    case "LOGIN":
      return { ...state, code: action.code };

    default:
      return state;
  }
}
