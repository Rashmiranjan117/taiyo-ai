import * as types from "./actionTypes";
import { ContactType } from "../../Components/Create";

interface State {
  data: ContactType[];
  isLoading: boolean;
  isError: boolean;
}

// type Action =
//   | { type: "GET_CONTACT_REQUEST"; payload: [] }
//   | {
//       type: "GET_CONTACT_SUCCESS";
//       payload?: [] ;
//     }
//   | { type: "GET_CONTACT_ERROR"; payload: [] };

const initState: State = {
  data: [],
  isLoading: false,
  isError: false,
};

const reducer = (state: State = initState, action: any) => {
  let { payload, type } = action;
  switch (type) {
    case types.GET_CONTACT_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case types.GET_CONTACT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, payload],
        isError: false,
      };
    case types.DELETE_CONTACT:
      return { ...state, isLoading: false, isError: false, data: payload };
    case types.EDIT_CONTACT:
      return { ...state, isLoading: false, isError: false, data: payload };
    case types.GET_CONTACT_ERROR:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};

export { reducer };
