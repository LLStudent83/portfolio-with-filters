import React from 'react';
import PropTypes from 'prop-types';

function Project({ img }) {
  return (
    <img src={img} alt="фото обложки проекта" />
  );
}

Project.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Project;
