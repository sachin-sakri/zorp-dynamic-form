/*
  AUTHOR : SACHIN SAKRI
  DATE : 30/11/2020
  DESCRIPTION : Exporting all the inputs fields to the form
*/

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { properties } from "../data.json";
import { EditTable } from "./EditTable";

export const setStateWithArrayOfObjects = (state, key, index, value) => {
  const newState = [...state];
  newState[index][key] = value;
  return newState;
};

export const setStateWithObjects = (state, key, value) => {
  const newState = state;
  newState[key] = value;
  return newState;
};

export function renderDataInArray() {
  let data = [];
  for (let property in properties) {
    data.push(properties[property]);
  }
  return data;
}

export const TextFieldType = ({ label, type, setFieldData, fieldData }) => {
  const [formTextData, setTextFormData] = useState([]);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setTextFormData(value);
    setFieldData(setStateWithObjects(fieldData, name, value));
  };

  return (
    <div className="form-control mt-2">
      <label> {label} :</label>{" "}
      <input
        type={type}
        value={formTextData}
        onChange={handleTextChange}
        name={label}
      />
    </div>
  );
};

export const SelectFieldType = ({
  label,
  type,
  enums,
  setFieldData,
  fieldData,
}) => {
  const [formSelectData, setFormSelectData] = useState([]);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormSelectData(value);
    setFieldData(setStateWithObjects(fieldData, name, value));
  };

  return (
    <div className="form-control mt-2">
      <label> {label} :</label>{" "}
      <select
        value={formSelectData}
        type={type}
        name={label}
        onChange={handleSelectChange}
      >
        {enums.map((enumdata) => {
          return <option key={uuidv4()}>{enumdata}</option>;
        })}
      </select>
    </div>
  );
};

export const NumberFormattedType = ({ label, setFieldData, fieldData }) => {
  const [formNumberData, setFormNumberData] = useState([]);

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    setFormNumberData(value);
    setFieldData(setStateWithObjects(fieldData, name, value));
  };

  return (
    <div className="form-control mt-2">
      <label> {label} :</label>{" "}
      <input
        type="number"
        value={formNumberData}
        name={label}
        min="0"
        onChange={handleNumberChange}
      />
    </div>
  );
};

export const EditableDataTable = ({
  label,
  properties,
  fieldData,
  setFieldData,
}) => {
  //here we will check properties to render now of columns,
  //however rows will be dynamic with array format

  const dataArray = [];
  properties.forEach((element) => {
    if (element.properties) {
      for (let obj in element.properties) {
        dataArray.push(element.properties[obj]);
      }
    }
  });

  return (
    <EditTable
      label={label}
      setFieldData={setFieldData}
      fieldData={fieldData}
      dataArray={dataArray}
      setStateWithObjects={setStateWithObjects}
    />
  );
};
