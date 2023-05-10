import React from "react";
import {
  getDataError,
  getDataRequest,
  getDataSuccess,
  deleteContact,
} from "../Redux/ContactReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Create from "../Components/Create";
import { VscError } from "react-icons/vsc";
import { ContactType } from "../Components/Create";
import EditModal from "../Components/EditModal";

const Contact = () => {
  const dispatch = useDispatch();
  const data = useSelector((store: any) => store.ContactReducer.data);
  console.log(data);

  const handleDelete = (id: string) => {
    dispatch(getDataRequest());
    try {
      let filteredData = data.filter((el: ContactType) => {
        return el.id !== id;
      });
      dispatch(deleteContact(filteredData));
      alert("Data deleted successfully");
    } catch (err) {
      dispatch(getDataError());
    }
  };

  const handleEdit = (id: string, payload: ContactType) => {};
  return (
    <>
      <h1 className="text-center mt-6 text-lg">Create Contact</h1>
      <div className="w-full h-screen px-8 py-8 flex justify-center place-items-start">
        <div className="w-full sm:w-80 md:w-60 lg:w-1/3 xl:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex-col justify-center items-center border px-4 py-4 text-center rounded">
          <Create />
          {/* {data.length && (
            <div className="mt-12 text-center">
              <p>
                No Contact Found.
                <br /> Please add contact from Create contact button.
              </p>
            </div>
          )} */}
          {data && data.length > 0 ? (
            data?.map((el: ContactType, i: number) => (
              <div
                key={el?.id}
                className="px-4 py-2 mt-4 border rounded grid gap-4 sm:flex sm:flex-col md:grid-cols-2 lg:grid-cols-3"
              >
                <p>
                  {el?.first} {el?.last}
                </p>
                <p>{el?.status}</p>
                <EditModal id={el?.id} />
                <button
                  className="border rounded bg-red-500 text-white cursor-pointer py-2 px-4"
                  onClick={() => handleDelete(el?.id)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div className="mt-12 text-center">
              <p>
                No Contact Found.
                <br /> Please add contact from Create contact button.
              </p>
            </div>
          )}
        </div>
        {/* {data &&
          data?.map((el: any, i: number) => {
            return (
              <div key={el?.id}>
                <p>
                  {el?.first}+ +{el?.last}
                </p>
                <p>{el?.status}</p>
              </div>
            );
          })} */}
      </div>
    </>
  );
};

export default Contact;
