/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';
import './projectList.css';

function ProjectList({ stateProjects }) {
  return (
    <section className="projectList"> {
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
