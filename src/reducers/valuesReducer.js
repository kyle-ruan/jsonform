import _ from 'lodash';
import Schema from '../config/schema';

const INITIAL_STATE = _.mapValues(Schema, (value) => {
  return value.default;
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RECEIVE_INITIAL_VALUES': {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};
