import axios from 'axios';
import Schema from '../config/schema';
import Layout from '../config/layout';

export const getInitialSchema = () => {
  return {
    type: 'GET_SCHEMA',
    payload: Schema
  };
};

export const getInitialValues = () => {
  return (dispatch) => {
    axios.get('/api/initialValues.json')
      .then(({ data }) => {
        dispatch({
          type: 'RECEIVE_INITIAL_VALUES',
          payload: data
        });
      });
  };
};

export const getInitialLayout = () => {
  return {
    type: 'GET_LAYOUT',
    payload: Layout
  };
};
