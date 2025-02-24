import React, { createContext, useContext, useState } from 'react';
import { users } from "../data/dummyData.js";
const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {

  const [history, setHistory] = useState(users);

  const formatHistoryData = (data) => {
    return data.map(item => ({
      ...item,
      phone: item.phone?.length < 4 ? '' : item.phone,
      document_type: item.document_type?.value,
      department: item.department?.value,
      municipality: item.municipality?.value,
      document_images: item.document_images?.map((item) => item.image),
      monthly_income: Number(item.monthly_income) || 0,
    }));
  }


  const addDataToHistory = (data) => {
    const formattedData = formatHistoryData([data]);
    setHistory((prevHistory) => [...formattedData, ...prevHistory]);
  };

  return (
    <FormContext.Provider value={{ history, addDataToHistory }}>
      {children}
    </FormContext.Provider >
  );
};
