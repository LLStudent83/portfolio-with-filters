import PropTypes, { func } from 'prop-types';
import React from 'react';
import shortId from 'shortid';
import ToolbarButton from './ToolbarButton';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <header>
      <ul className="toolbar__list">
        {filters.map((filter) => (
          <ToolbarButton
            selected={selected}
            onClick={onSelectFilter}
            name={filter}
            key={shortId.generate()}
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
