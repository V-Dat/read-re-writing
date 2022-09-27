import { useState, useEffect } from "react";
import { TagsInput } from "src/lib/My-react-tag-input-component";

function TagInputExample() {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setTimeout(() => setSelected(["papaya", "dadaya", "lalaya"]), 1500);
  }, []);

  const handleExisting = () => {
    alert("tag already exists");
  };

  const handleChange = (newSelectedList: any) => {
    setSelected(newSelectedList);
  };

  const warningMessage = "press enter or comma to add new tag";
  return (
    <div>
      <h1>Add Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <TagsInput
        selectedList={selected}
        onChange={handleChange}
        name="fruits"
        placeHolder="enter fruits"
        seprators={["Enter", " ", ","]}
        warningMessage={warningMessage}
      />
    </div>
  );
}

export default TagInputExample;
