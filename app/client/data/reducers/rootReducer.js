import { TOGGLE_SUBHEADER } from 'Types';

const initialState = {
  isSubheaderShown: false,
};

function rootReducer(state = initialState, action) {
  const newState = { ...state };
  switch(action.type) {
    case TOGGLE_SUBHEADER:
      newState.isSubheaderShown = !newState.isSubheaderShown;
      return newState;
    default:
      return state;
  }
};

export { initialState };
export default rootReducer;
