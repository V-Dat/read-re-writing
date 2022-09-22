import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

function Home() {
  const [selected, setSelected] = useState([]);

  return (
    <div className="Home-root">
      <h1>Select Fruits</h1>
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

export default Home;
