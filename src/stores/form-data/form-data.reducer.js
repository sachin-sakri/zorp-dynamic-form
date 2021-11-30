import { SUBMIT, CLEAR } from './form-data.types';

const INITIAL_STATE = {
  formData: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBMIT:
      return {
        ...state,
        formData: state.formData.concat([action.payload])
      };
    case CLEAR:
      return {
        ...state,
        formData: []
      };
    default:
      return state;
  }
};

export default reducer;
