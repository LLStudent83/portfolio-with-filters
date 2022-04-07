import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import projects from '../ProjectList/projects';
import './portfoliioStyle.css';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
    this.state = {
      selected: 'All',
      stateProjects: projects,
    };
  }

  onSelectFilter = (filter) => {
    if (filter === 'All') {
      this.setState({ stateProjects: projects, selected: filter });
      return;
    }
    const newProjects = projects
      .filter((project) => project.category === filter);
    this.setState({ stateProjects: newProjects, selected: filter });
  };

  render() {
    const { selected, stateProjects } = this.state;
    return (
      <main className="portfoliio">
        <Toolbar selected={selected} filters={this.filters} onSelectFilter={this.onSelectFilter} />
        <ProjectList stateProjects={stateProjects} />
      </main>
    );
  }
}

export default Portfolio;
