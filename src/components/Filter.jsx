import React from "react";
import PropTypes from "prop-types";
import css from "../Modules/phoneBook.module.css"

function Filter({filter, handleFilterChange}) {
    return (
        <div>
        <label className={`${css.basicFont} ${css.labelContacts}`}>
        Filter contacts by name:
        <input className={`${css.basicFont} ${css.input}`}
        type="text"
        value={filter}
        onChange={(event) => handleFilterChange(event.target.value)}
        />
        </label>
      </div>
);
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};


export default Filter;