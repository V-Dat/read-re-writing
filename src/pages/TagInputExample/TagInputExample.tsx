import { useState, useEffect } from "react";
import { TagsInput } from "src/lib/react-tag-input-component";

function TagInputExample() {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => setSelected(["papaya", "dadaya", "lalaya"]), 1500);
  }, []);

  const handleExisting = () => {
    alert("tag already exists");
  };

  // const handleChange = (tag: any) => {
  //   setSelected((prev) => [...prev, tag]);
  // };
  console.log("re-render");
  return (
    <div>
      <h1>Add Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <TagsInput
        value={selected}
        onChange={setSelected}
        onExisting={handleExisting}
        name="fruits"
        placeHolder="enter fruits"
        seprators={["Enter", " ", ","]}
      />

      <em>press enter or comma to add new tag</em>
    </div>
  );
}

export default TagInputExample;
