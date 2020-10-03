export const initialState = {
  input: "",
};

//takes a state and a action (add to datalayer or get from datalayer)
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        input: action.input,
      };
    default:
      return state;
  }
};

export default reducer;
