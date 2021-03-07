import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
  render() {
    const {title, image, description, link} = this.props.project;

    return (
      <div className="project box">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{description}</p>
        <a className="btn-link" href={link} target="_blank">View Site</a>
      </div>
    )
  }
}

class Projects extends Component {
  render() {
    return (
      <section id="projects">
        <h1>Projects</h1>
        <p>Here are some of the highlighted projects that I have put a lot of work into. There are more, but they are inaccessible to the public or require logging in as a user to see anything of value.</p>
        <div>
          {
            PROJECTS.map(PROJECT => {
              return (
                <Project key={PROJECT.title} project={PROJECT}/>
              )
            })
          }
        </div>
      </section>
    );
  }
}

export default Projects;