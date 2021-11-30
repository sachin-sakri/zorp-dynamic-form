import { combineReducers } from 'redux';

import formDataReducer from './form-data/form-data.reducer';

const rootReducer = combineReducers({
  formData: formDataReducer
});

export default rootReducer;
