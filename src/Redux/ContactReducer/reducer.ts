import * as types from "./actionTypes";

interface State {
  data: any[];
  isLoading: boolean;
  isError: boolean;
}

type Action =
  | { type: "GET_CONTACT_REQUEST"; payload?: null | any[] }
  | { type: "GET_CONTACT_SUCCESS"; payload?: any[] }
  | { type: "GET_CONTACT_ERROR"; payload?: null | any[] };

const initState: State = {
  data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state: State = initState, action: Action) => {
  let { type, payload } = action;
  switch (type) {
    case types.GET_CONTACT_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_CONTACT_SUCCESS:
      return { ...state, isLoading: false, data: payload, isError: false };
    case types.GET_CONTACT_ERROR:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};

export { reducer };
