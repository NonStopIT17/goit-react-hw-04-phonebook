import React from "react";
import PropTypes from "prop-types";
import { FilterForm } from "../contacts/Contacts.styled";

function Filter({ setFilter }) {
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FilterForm>
      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ marginBottom: "10px" }}>Find contacts by name</span>
        <input
          onChange={handleFilterChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
    </FilterForm>
  );
}

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Filter;



