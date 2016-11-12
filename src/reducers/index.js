import { combineReducers } from 'redux';
import SchemaReducer from './schemaReducer';
import ValuesReducer from './valuesReducer';
import LayoutReducer from './layoutReducer';

const rootReducer = combineReducers({
  schema: SchemaReducer,
  values: ValuesReducer,
  layout: LayoutReducer
});

export default rootReducer;
