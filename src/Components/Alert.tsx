import React, { useState, useEffect } from "react";

const Alert = () => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return showAlert ? (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative z-10000"
      role="alert"
    >
      <strong className="font-bold">Invalid Feild!</strong>
      <br />
      <span className="block sm:inline">All Feilds must be filled.</span>
    </div>
  ) : null;
};

export default Alert;
