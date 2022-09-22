import React from "react";
import { useState } from "react";
import MultiSelect from "../../../lib/multi-select/index";

function SelectMulti({ options }: any) {
  const [selected, setSelected] = useState([]);

  return (
    <div className="SelectMultiPage-root">
      <h1>{`Select Multi >> Fruits`}</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        // disableSearch={true}
      />
    </div>
  );
}

export default SelectMulti;
