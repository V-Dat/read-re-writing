import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

function SelectMultiDisable({ options }: any) {
  const [selected, setSelected] = useState([]);

  return (
    <div className="SelectMultiPage-root">
      <h1>{`Select Multi + Disable >> Fruits`}</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disableSearch={true}
      />
    </div>
  );
}

export default SelectMultiDisable;
