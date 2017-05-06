import initialState from "./initialState";

export default function fuelSavingsReducer(
  state = initialState.fuelSavings,
  action
) {
  switch (action.type) {
    case "CONFIRM":
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
