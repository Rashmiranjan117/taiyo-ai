import React from "react";
import {
  getDataError,
  getDataRequest,
  getDataSuccess,
} from "../Redux/ContactReducer/action";
import { useDispatch, useSelector } from "react-redux";
import Create from "../Components/Create";
import { VscError } from "react-icons/vsc";

const Contact = () => {
  const dispatch = useDispatch();
  const data = useSelector((store: any) => store.ContactReducer.data);
  console.log(data.length);
  return (
    <>
      <h1 className="text-center mt-6 text-lg">Create Contact</h1>
      <div className="w-full h-screen px-8 py-8 flex justify-center place-items-start">
        <div className="w-full sm:w-80 md:w-60 lg:w-1/3 xl:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex-col justify-center items-center border px-4 py-4 text-center">
          <Create />
          {data && (
            <div className="mt-12 text-center">
              <p>
                No Contact Found.
                <br /> Please add contact from Create contact button.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
