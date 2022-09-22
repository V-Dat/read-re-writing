import React from "react";
import SelectMulti from "./SelectMulti/SelectMulti";
// import SelectMulti from "../../lib/multi-select/index";
import SelectMultiDisable from "./SelectMultiDisable/SelectMultiDisable";
import SelectMultiWithSearch from "./SelectMultiWithSearch/SelectMultiWithSearch";

const optionsNoDisable = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango0 🥭", value: "Mango0" },
  { label: "Mango1 🥭🥭", value: "Mango1" },
  { label: "Mango2 🥭🥭🥭", value: "Mango2" },
  { label: "Strawberry 🍓", value: "strawberry" },
];

const optionsDisable = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango0 🥭", value: "Mango0" },
  { label: "Mango1 🥭🥭", value: "Mango1", disabled: true },
  { label: "Mango2 🥭🥭🥭", value: "Mango2", disabled: true },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

function SelectMultiPage() {
  const selectMultiSearchLabel = "SelectMultil + Search >> Fruits";
  const selectMultiSearchDisableLabel =
    "SelectMultil + Search + Disable >> Fruits";
  return (
    <div className="SelectMultiPage-root">
      <div>
        <a href="https://github.com/hc-oss/react-multi-select-component/">
          Git
        </a>
        <a
          style={{ paddingLeft: "20px" }}
          href="https://react-multi-select-component.pages.dev/?path=/story/recipes-custom-filter-logic--page/"
        >
          Example : StoryBook
        </a>
      </div>
      <h1>MultiSelect Example</h1>
      {/* No disable */}
      <SelectMulti options={optionsNoDisable} />

      {/* <SelectMultiWithSearch
        label={selectMultiSearchLabel}
        options={optionsNoDisable}
      /> */}

      {/* disable */}

      {/* <SelectMultiDisable options={optionsDisable} />

      <SelectMultiWithSearch
        label={selectMultiSearchDisableLabel}
        options={optionsDisable}
      /> */}
    </div>
  );
}

export default SelectMultiPage;
