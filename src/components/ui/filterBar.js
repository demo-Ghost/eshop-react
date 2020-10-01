import React from "react";
import Select from "react-select";

import CheckBox from "./checkBox";

const FilterBar = ({ handleTagSelect, productTags }) => {
  const orderOptions = [
    { value: "ASCENDING", label: "Αύξουσα" },
    { value: "DESCENDING", label: "Φθίνουσα" },
  ];

  return (
    <div className="row justify-content-end">
      <div className="col-12 col-md-10">
        <Select
          className="w-25"
          onChange={(value) => console.log(value)}
          options={orderOptions}
          placeholder="Ταξινόμηση"
          value={{ value: "ASCENDING", label: "Αύξουσα" }}
        />
        <br />
        <div className="form-group">
          {productTags.map((tag) => (
            <CheckBox
              handleTagSelect={handleTagSelect}
              key={tag.id}
              label={tag.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
