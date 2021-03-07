import React, {Component} from 'react';
import {EXPERIENCES} from './data/resume';
import {SKILLS} from './data/resume';
import {HONORS_AWARDS} from './data/resume';
import resume from './resources/Jessica Jenkins Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';


class Experience extends Component {
  render() {
    const {company, location, position, start, end, duties} = this.props.experience;
    
    return(
      <div className="experience box">
        <p><span className="bold">{company}</span>, {location} - <span className="italic">{position}</span></p>
        <p className="dates">{start} - {end}</p>
        <ul>
          {
            duties.map((duty, i) => {
              return (
                <li key={'duty_' + i}>{duty}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <h1>Resume</h1>
        <div>
          <div className="left">
            <div>
              <h2>Experience</h2>
              {
                EXPERIENCES.map(EXPERIENCE => {
                  return (
                    <Experience key={EXPERIENCE.id} experience={EXPERIENCE} />
                  );
                })
              }
            </div>
            <div className="education">
              <h2>Education</h2>
              <div className="box">
                <p><span className="bold">Elizabethtown Community and Technical College</span>, Elizabethtown, KY - <span className="italic">Associate Degree in Applied Science with high distinction</span></p>
                <p className="dates">June 2013 - May 2015</p>
                <p>Computer and Information Technology Major for Internet Technologies with a web programming specialization</p>
                <p>GPA - 4.0</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="skills">
              <h2>Technical Skills and Workflow Tools</h2>
              <ul className="box">
                {
                  SKILLS.map((SKILL, i) => {
                    return <li key={'skill_' + i}>{SKILL}</li>;
                  })
                }
              </ul>
            </div>
            <div className="honors-awards">
              <h2>Honors and Awards</h2>
              <div className="box">
                {
                  HONORS_AWARDS.map((HONOR_AWARD, i) => {
                    return <p key={i}><span className="title bold">{HONOR_AWARD.title}</span>{HONOR_AWARD.details}</p>;
                  })
                }
              </div>
            </div>
            <div className="pdf-download">
              <h3>Download Resume</h3>
              <a className="box" href={resume} target="_blank"><FontAwesomeIcon icon={faFileDownload} /></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;