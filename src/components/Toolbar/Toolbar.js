/* eslint-disable react/no-array-index-key */
import PropTypes, { func } from 'prop-types';
import React from 'react';
import ToolbarButton from './ToolbarButton';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <header>
      <ul className="toolbar__list">
        {filters.map((filter, i) => (
          <ToolbarButton
            selected={selected}
            onClick={onSelectFilter}
            name={filter}
            key={i}
          />
        ))}
      </ul>
    </header>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: func.isRequired,
};

export default Toolbar;
