import * as types from "./actionTypes";

interface State {
  list: any[];
  isLoading: boolean;
  isError: boolean;
}

type Action =
  | { type: "GET_CHART_SUCCESS"; payload?: null | any[] }
  | { type: "GET_CHART_SUCCESS"; payload?: any[] }
  | { type: "GET_CHART_ERROR"; payload?: null | any[] };

const initState: State = {
  list: [],
  isLoading: false,
  isError: false,
};

const reducer = (state: State = initState, action: Action) => {
  const { payload, type } = action;
  switch (type) {
    case types.GET_CHART_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_CHART_SUCCESS:
      return { ...state, isLoading: false, list: payload, isError: false };
    case types.GET_CHART_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
