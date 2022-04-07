import React from 'react';
import PropTypes from 'prop-types';
import './toolbarStyle.css';

function ToolbarButton({ name, selected, onClick }) {
  const classes = ['toolbar__button'];
  if (name === selected) {
    classes.push('toolbar__button_active');
  }

  return (
    <li>
      <button type="button" onClick={() => onClick(name)} className={classes.join(' ')}>
        {name}
      </button>
    </li>
  );
}

ToolbarButton.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToolbarButton;
