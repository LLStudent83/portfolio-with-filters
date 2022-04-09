/* eslint-disable react/forbid-prop-types */
import React from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import Project from './Project';
import './projectList.css';

function ProjectList({ stateProjects }) {
  return (
    <section className="projectList"> {
        stateProjects.map((project) => (
          <Project img={project.img} key={shortId.generate()} />
        ))
            }
    </section>
  );
}

ProjectList.propTypes = {
  stateProjects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectList;
