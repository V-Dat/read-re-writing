import "./index.scss";
import React, { useState, useRef, ReactNode } from "react";
import Tag from "./Tag";

export const TagsInput = (props: TagsInputProps) => {
  const {
    name,
    placeHolder,
    selectedList,
    onChange,
    seprators = ["Enter"],
    disabled,
    isEditOnRemove,
    className,
    warningMessage,
  } = props;

  const handleClickRemove = (text: string) => {
    const newSelectedList: any = selectedList?.filter((item) => item !== text);
    checkingExist(newSelectedList, text);
    onChange && onChange(newSelectedList);
  };

  const [inputValue, setInputValue] = useState<string>("");
  const [isExisting, setIsExisting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: any) => {
    // change type later

    event.stopPropagation();
    const text = event.target.value;

    // case 1 handle delte
    if (event.key === "Backspace" && selectedList?.length && !text) {
      event.target.value = isEditOnRemove ? `${selectedList.at(-1)} ` : "";
      onChange && onChange([...selectedList.slice(0, -1)]);
      handleResetAndFocusInput();
      return;
    }

    // case 2 handle separate
    if (text && seprators.includes(event.key)) {
      if (selectedList && !selectedList.includes(inputValue)) {
        onChange && onChange([...selectedList, text]);
        handleResetAndFocusInput();
      }
      return;
    }
  };
  const handleChangeInput = (event: any) => {
    // change type later
    event.stopPropagation();
    const text = event.target.value;

    // case 3 handle input
    setInputValue(text);
    checkingExist(selectedList, text);
    // case 4 set flag if selectedList is existing this value
  };

  function handleResetAndFocusInput() {
    setInputValue("");
    inputRef.current?.focus();
  }

  function checkingExist(list: string[] | undefined, text: string) {
    // change type later
    if (!list) return;
    if (list.includes(text)) {
      setIsExisting(true);
    } else {
      setIsExisting(false);
    }
  }

  return (
    <div
      aria-labelledby={name}
      className={`tag-input-root ${
        isExisting ? "tag-input-root--warning" : ""
      } ${className ? className : ""}`}
    >
      {selectedList &&
        selectedList.map((tag) => (
          <Tag
            key={tag}
            text={tag}
            onClickRemove={handleClickRemove}
            disabled={disabled}
          />
        ))}

      <input
        ref={inputRef}
        className={`input`}
        type="text"
        name={name}
        placeholder={placeHolder}
        onChange={handleChangeInput}
        disabled={disabled}
        value={inputValue}
        onKeyDown={handleKeyDown}
      />

      {warningMessage && isExisting && (
        <p className="warning-message">{warningMessage}</p>
      )}
    </div>
  );
};

interface TagsInputProps {
  name?: string;
  placeHolder?: string;
  selectedList?: string[];
  onChange?: (tags: string[]) => void;
  seprators?: string[];
  onExisting?: (tag: string) => void;
  onRemoved?: (tag: string) => void;
  disabled?: boolean;
  isEditOnRemove?: boolean;
  beforeAddValidate?: (tag: string, existingTags: string[]) => boolean;
  className?: string;
  warningMessage?: ReactNode | string;
}
