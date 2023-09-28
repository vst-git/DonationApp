import React from 'react';

const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
  labelColor,
}) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={labelFor} className="form-label" style={{ color: labelColor || 'black' }}>
          {labelText}
        </label>
        <input
          type={inputType}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
