import React, { useRef } from "react";
import "./SearchBar.css";
// export type SearchBarQuery = {
//   /* Free form text to search notes */
//   q: string;
//   /* Callback for the parent component to know when something is typed */
//   onTextChanged: (currentQuery: string) => void;
// };

export const SearchBar = (props) => {
  const searchRef = useRef(null);

  return (
    <>
      <input
        className="SearchBar-input"
        type={"text"}
        aria-label="Search notes"
        placeholder="Search notes"
        ref={searchRef}
        onChange={(_) => {
          props.onTextChange(searchRef.current.value);
        }}
      />
    </>
  );
};
