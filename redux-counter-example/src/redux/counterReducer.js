import { INCREMENT, DECREMENT, RESET } from "./type";
const intialState = {
  value: 0,
};
export default function counterReducer(state = intialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case DECREMENT:
      return { ...state, value: state.value - action.payload };
    case RESET:
      return { ...state, value: 0 };
    default:
      return state;
  }
}
