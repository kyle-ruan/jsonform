const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_LAYOUT': {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};
