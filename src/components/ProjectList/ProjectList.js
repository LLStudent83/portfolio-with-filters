/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

function ProjectList({ stateProjects }) {
  return (
    <section> {
        stateProjects.map((project, i) => (
          <Project img={project.img} key={i} />
        ))
            }

    </section>
  );
}

ProjectList.propTypes = {
  stateProjects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectList;
