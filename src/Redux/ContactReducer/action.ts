import * as types from "./actionTypes";

const getDataRequest = () => {
  return { type: types.GET_CONTACT_REQUEST };
};

const getDataSuccess = (payload: any) => {
  return { type: types.GET_CONTACT_SUCCESS, payload };
};

const getDataError = () => {
  return { type: types.GET_CONTACT_ERROR };
};

export { getDataError, getDataRequest, getDataSuccess };
