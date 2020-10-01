import React from "react";

const CheckBox = ({ handleTagSelect, label }) => {
  return (
    <div className="form-check form-check-inline mx-3">
      <input
        className="form-check-input d-inline-block"
        type="checkbox"
        value=""
        id={label}
        onChange={() => handleTagSelect(label)}
      />
      <label className="form-check-label">{label}</label>
    </div>
  );
};

export default CheckBox;
