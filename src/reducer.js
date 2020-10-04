export const initialState = {
  input: "",
  faceBox:{},
};

//takes a state and a action (add to datalayer or get from datalayer)
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.input,
      };
      case "SET_FACEBOX":
        return {
          ...state,
          faceBox: action.faceBox,
        };
    default:
      return state;
  }
};

export default reducer;
