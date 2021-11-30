import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ReactJson from 'react-json-view';
import { properties } from '../../data.json';
import { iterateThroughObject } from '../constants/common';
import { formSubmit, clearData } from '../../stores/form-data/form-data.actions';
import { EditableDataTable, NumberFormattedType, renderDataInArray, SelectFieldType, TextFieldType } from '../DataFields';

function RenderDynamicFields() {
  const dispatch = useDispatch();
  const [fieldData, setFieldData] = useState(iterateThroughObject(properties));

  const jsonData = renderDataInArray();

  const formData = useSelector((state) => state?.formData?.formData);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(formSubmit(fieldData));
  };

  const handleReduxClear = () => {
    dispatch(clearData());
  };

  return (
    <div className="text-left">
      <form className="form-group" onSubmit={onSubmit}>
        {Array.isArray(jsonData) &&
          jsonData.map((data) => {
            if (data?.type === 'string' && Array.isArray(data?.enums)) {
              return <SelectFieldType label={data?.title} key={uuidv4()} enums={data.enums} setFieldData={setFieldData} fieldData={fieldData} />;
            } else if (data?.type === 'string' && !Array.isArray(data?.enums)) {
              return <TextFieldType setFieldData={setFieldData} label={data?.title} key={uuidv4()} fieldData={fieldData} />;
            } else if (data?.type === 'integer') {
              return <NumberFormattedType setFieldData={setFieldData} label={data?.title} key={uuidv4()} fieldData={fieldData} />;
            } else if (data?.type === 'array') {
              return <EditableDataTable setFieldData={setFieldData} label={data?.title} properties={data?.items?.anyOf} fieldData={fieldData} />;
            }
          })}
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <div className="form-group text-center">
        <button type="button" className="btn btn-primary" onClick={handleReduxClear}>
          Clear Redux
        </button>
      </div>
      <ReactJson src={formData} />
    </div>
  );
}

export default RenderDynamicFields;
