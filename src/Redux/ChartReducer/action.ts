import * as types from "./actionTypes";

const getDataRequest = () => {
  return { type: types.GET_CHART_REQUEST };
};

const getDataSuccess = (payload: any) => {
  return { type: types.GET_CHART_SUCCESS, payload };
};

const getDataError = () => {
  return { type: types.GET_CHART_ERROR };
};

export { getDataError, getDataRequest, getDataSuccess };
