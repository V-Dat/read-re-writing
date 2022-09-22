import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

function SelectMultiWithSearch({
  options,
  label = "Select Multi + Search >> Fruits",
}: any) {
  const [selected, setSelected] = useState([]);

  return (
    <div className="SelectMultiWithSearch-root">
      <h1>{label}</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}

export default SelectMultiWithSearch;
