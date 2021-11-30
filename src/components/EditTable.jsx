import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createObjectWithArray } from "./constants/common";

export const EditTable = ({
  label,
  dataArray,
  fieldData,
  setFieldData,
  setStateWithObjects,
}) => {
  const headings = dataArray.map((data) => {
    return data?.title;
  });

  const [rows, setRows] = useState([createObjectWithArray(dataArray)]);

  const setStateWithArrayOfObjects = (state, key, index, value) => {
    const newState = [...state];
    newState[index][key] = value;
    return newState;
  };

  const handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    setRows(setStateWithArrayOfObjects(rows, name, idx, value));
    setFieldData(setStateWithObjects(fieldData, label, rows));
  };

  const handleAddRow = () => {
    setRows([...rows, createObjectWithArray(dataArray)]);
  };

  const handleRemoveSpecificRow = (idx) => () => {
    rows.splice(idx, 1);
    setRows([...rows]);
  };

  return (
    <div className="form-control mt-2">
      <h5>{label} :</h5>
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  {Array.isArray(headings) &&
                    headings.map((heading) => {
                      return (
                        <th className="text-center" key={uuidv4()}>
                          {" "}
                          {heading}{" "}
                        </th>
                      );
                    })}
                </tr>
              </thead>
              <tbody>
                {rows.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    {dataArray.map((data, index) => {
                      return (
                        <td key={index}>
                          <input
                            type={data?.type === "integer" ? "number" : "text"}
                            name={data?.title}
                            value={rows[idx].data?.title}
                            onChange={handleChange(idx)}
                            className="form-control"
                          />
                        </td>
                      );
                    })}

                    {idx > 0 && (
                      <td key={uuidv4()}>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-center mb-4">
              <button
                type="button"
                onClick={handleAddRow}
                className="btn btn-outline-primary btn-sm"
              >
                Add Row
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
