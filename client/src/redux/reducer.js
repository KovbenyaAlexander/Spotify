import { initialState } from "./initialState";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, code: action.code };
    case "SET_TOKENS":
      return { ...state, tokens: { ...state.tokens, ...action.payload } };
    default:
      return state;
  }
}
