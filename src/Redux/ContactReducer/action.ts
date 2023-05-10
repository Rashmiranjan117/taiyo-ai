import * as types from "./actionTypes";
import { ContactType } from "../../Components/Create";

const getDataRequest = () => {
  return { type: types.GET_CONTACT_REQUEST };
};

const getDataSuccess = (payload: ContactType) => {
  return { type: types.GET_CONTACT_SUCCESS, payload };
};

const getDataError = () => {
  return { type: types.GET_CONTACT_ERROR };
};

const deleteContact = (payload: ContactType[]) => {
  return { type: types.DELETE_CONTACT, payload };
};

const editContact = (payload: ContactType[]) => {
  return { type: types.EDIT_CONTACT, payload };
};
export { getDataError, getDataRequest, getDataSuccess, deleteContact,editContact };
