import React, { useState } from "react";

export default function Searchbar(props) {
  const [term, setTerm] = useState(" ");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
    </div>
  );
}
