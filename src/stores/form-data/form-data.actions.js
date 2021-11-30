import { SUBMIT, CLEAR } from './form-data.types';

export const formSubmit = (payload) => {
  return {
    type: SUBMIT,
    payload: payload
  };
};

export const clearData = () => {
  return {
    type: CLEAR
  };
};
