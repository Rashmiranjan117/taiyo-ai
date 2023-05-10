import React, { useState, Fragment, FormEvent, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import {
  getDataError,
  getDataRequest,
  getDataSuccess,
  editContact,
} from "../Redux/ContactReducer/action";

interface Props {
  id: string;
}

export interface ContactType {
  first: string;
  last: string;
  status: string;
  id: string;
}

const EditModal = ({ id }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContact] = useState<ContactType>({
    first: "",
    last: "",
    status: "",
    id: "",
  });
  const initState: ContactType = {
    first: "",
    last: "",
    status: "",
    id: "",
  };
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const data = useSelector((store: any) => store.ContactReducer.data);
  let filteredData = data.filter((el: ContactType) => {
    return el.id === id;
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(getDataRequest());
      if (!contact.first || !contact.last || !contact.status) {
        closeModal();
        return setShowAlert(true);
        // return alert("All Data feilds must be filled");
      } else {
        let new_data = data?.map((el: ContactType) => {
          if (el.id === id) {
            return contact;
          } else {
            return id;
          }
        });
        dispatch(editContact(new_data));
        setShowAlert(false);
        setContact(initState);
        closeModal();
      }
    } catch (err) {
      console.error(err);
      dispatch(getDataError());
    }
  };
  return (
    <>
      <button
        onClick={openModal}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edit Contact Screen
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Enter Data in Respective feilds
                  </p>
                  <form onSubmit={handleSubmit}>
                    <input
                      className="border mt-2 px-2 py-2"
                      placeholder="Enter New First Name"
                      name="first"
                      value={filteredData?.first}
                      onChange={handleChange}
                    />
                    <input
                      className="border mt-2 px-2 py-2"
                      placeholder="Enter New Last Name"
                      name="last"
                      value={filteredData?.last}
                      onChange={handleChange}
                    />
                    <div className="mt-4 mb-2">
                      <label className="mx-2">Status:</label>
                      <input
                        className="mx-2"
                        type="radio"
                        name="status"
                        value="Active"
                        checked={filteredData?.status === "Active"}
                        onChange={handleChange}
                      />
                      Active
                      <input
                        className="mx-2"
                        type="radio"
                        name="status"
                        checked={filteredData?.status === "Inactive"}
                        value="Inactive"
                      />
                      Inactive
                    </div>
                    <button
                      type="submit"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded"
                    >
                      Save Editted Contact
                    </button>
                  </form>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditModal;
