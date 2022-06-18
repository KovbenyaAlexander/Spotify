const initialState = {
  code: "",
  tokens: {
    accessToken: "",
    refreshToken: "",
    expiresIn: "",
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, code: action.code };
    case "SET_TOKENS":
      return { ...state, tokens: action.payload };
    default:
      return state;
  }
}
