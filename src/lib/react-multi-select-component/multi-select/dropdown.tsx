/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */
import React, { useEffect, useRef, useState } from "react";

import { useDidUpdateEffect } from "../hooks/use-did-update-effect";
import { useKey } from "../hooks/use-key";
import { useMultiSelect } from "../hooks/use-multi-select";
import { KEY } from "../lib/constants";
import SelectPanel from "../select-panel";
import { Cross } from "../select-panel/cross";
import { Arrow } from "./arrow";
import { DropdownHeader } from "./header";
import { Loading } from "./loading";

const Dropdown = () => {
  const {
    t,
    onMenuToggle,
    ArrowRenderer,
    shouldToggleOnHover = true,
    isLoading,
    disabled,
    onChange,
    labelledBy,
    value,
    isOpen,
    defaultIsOpen,
    ClearSelectedIcon,
    closeOnChangedValue,
  } = useMultiSelect();

  // console.log(4444, useMultiSelect());

  useEffect(() => {
    if (closeOnChangedValue) {
      setExpanded(false);
    }
  }, [value]);

  const [isInternalExpand, setIsInternalExpand] = useState(true);
  const [expanded, setExpanded] = useState(defaultIsOpen);
  const [hasFocus, setHasFocus] = useState(false);
  const FinalArrow = ArrowRenderer || Arrow;

  const wrapper: any = useRef();

  useDidUpdateEffect(() => {
    // console.log(1111, "did update effect");
    //  this function trigger when user click on INPUT MULTI-SELECT to show dropdown
    onMenuToggle && onMenuToggle(expanded);
  }, [expanded]);

  // console.log(123, defaultIsOpen, 456, isOpen); // <=== tesing useEffect Below
  useEffect(() => {
    if (defaultIsOpen === undefined && typeof isOpen === "boolean") {
      // console.log("THIS EFFECT WILL RUN WHEN DEVELOPER PASSING FOLLOWING PROPS :  defaultIsOpen && isOpen ");
      // THIS EFFECT WILL RUN WHEN DEVELOPER PASSING FOLLOWING PROPS :  defaultIsOpen && isOpen
      setIsInternalExpand(true);
      setExpanded(isOpen);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    // allows space and enter when focused on input/button'
    if (
      ["text", "button"].includes(e.target.type) &&
      [KEY.SPACE, KEY.ENTER].includes(e.code)
    ) {
      // console.log(" statement run when user keydown on input");
      return;
    }

    if (isInternalExpand) {
      // console.log("this state ment will open dropdown (expanded )")
      // toggle show/hide <Dropdown /> wwhen user using tab key => move to tab-index <Multi-select /> and press "SPacing key"
      // default you can press enter
      if (e.code === KEY.ESCAPE) {
        setExpanded(false);
        //console.log("wrapper meaning container <Multi-select />")
        wrapper?.current?.focus();
      } else {
        setExpanded(true);
      }
    }
    e.preventDefault();
  };

  // use key for what?
  //  trigger KEY.ENTER, KEY.ARROW_DOWN, KEY.SPACE, KEY.ESCAPE
  useKey([KEY.ENTER, KEY.ARROW_DOWN, KEY.SPACE, KEY.ESCAPE], handleKeyDown, {
    target: wrapper,
  });

  const handleHover = (iexpanded: boolean) => {
    console.log(333, isInternalExpand);
    isInternalExpand && shouldToggleOnHover && setExpanded(iexpanded);
  };

  const handleFocus = () => !hasFocus && setHasFocus(true);

  const handleBlur = (e) => {
    // console.log(1111, e.currentTarget);
    // console.log(2222, e.relatedTarget);
    if (!e.currentTarget.contains(e.relatedTarget) && isInternalExpand) {
      setHasFocus(false);
      setExpanded(false);
    }
  };

  const handleMouseEnter = () => handleHover(true);

  const handleMouseLeave = () => handleHover(false);

  const toggleExpanded = () => {
    isInternalExpand && setExpanded(isLoading || disabled ? false : !expanded);
  };

  const handleClearSelected = (e) => {
    e.stopPropagation();
    onChange([]);
    isInternalExpand && setExpanded(false);
  };

  return (
    <div
      tabIndex={0}
      className="dropdown-container"
      aria-labelledby={labelledBy}
      aria-expanded={expanded}
      aria-readonly={true}
      aria-disabled={disabled}
      ref={wrapper}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="dropdown-heading" onClick={toggleExpanded}>
        {/* 1. value user selected   */}
        <div className="dropdown-heading-value">
          <DropdownHeader />
        </div>

        {/* 2. loading if asynchronous */}
        {isLoading && <Loading />}

        {/* 3. button clear all state */}
        {value.length > 0 && ClearSelectedIcon !== null && (
          <button
            type="button"
            className="clear-selected-button"
            onClick={handleClearSelected}
            disabled={disabled}
            aria-label={t("clearSelected")}
          >
            {ClearSelectedIcon || <Cross />}
          </button>
        )}
        <FinalArrow expanded={expanded} />
      </div>

      {/* 4. Dropdown pannel */}
      {expanded && (
        <div className="dropdown-content">
          <div className="panel-content">
            <SelectPanel />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
