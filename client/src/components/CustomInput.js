import React from "react";

const CustomInput = (props) => {
  const { type, name, placeholder, value, onChange,classname } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-control ${classname}`}
      />
    </div>
  );
};

export default CustomInput;