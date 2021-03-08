import React, { Component } from 'react';
import profile from '../src/assets/imgs/profile.jpg';
import SOCIAL_LINKS from './data/socialLinks';
import { NavLink } from 'react-router-dom';

const DESCRIPTIONS = [
  'passionate',
  'driven',
  'a problem solver'
];

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptionIndex: 0, 
      fadeIn: true,
      displayPersonal: false
    };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
    this.cycleDescriptions();
  }

  componentWillUnmount() {
    clearInterval(this.descriptionInterval);
    clearInterval(this.timeout);
  }

  cycleDescriptions() {
    this.descriptionInterval = setInterval(() => {
      const descriptionIndex = (this.state.descriptionIndex + 1) % DESCRIPTIONS.length;
      this.setState({descriptionIndex, fadeIn: true});
      this.timeout =  setTimeout(() => this.setState({fadeIn: false}), 2000);
    }, 4000);
  }

  handleClick = () => {
    this.setState({displayPersonal: !this.state.displayPersonal});
  }

  render() {
    const {fadeIn, descriptionIndex} = this.state;
    const description = DESCRIPTIONS[descriptionIndex];
    const linkedin = SOCIAL_LINKS.find(link => link.id === 'linkedin').link;

    return (
      <section id="about" className="container">
        <div>
          <h1>A Little About Me</h1>
          <img src={profile} alt="Picture of Jessica Jenkins" />
          <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {description}.</p>
        </div>
        <div id="professional">
          <h2>Professional</h2>
          <p>My name is Jessica, you can call me Jess. If you haven't picked up on it already, I am a Front End Developer and websites are my forte. I have had a love for technology and computers my whole life.</p>
          <p>I may only have a two year degree, but what I lack in formal education I make up for with informal education and passion for what I am learning.</p>
          <p>I am extremely hands-on focused and work hard to achieve my goals. I want to become an irreplaceable asset wherever I am and always strive to improve.</p>
          <p>I have an understanding of a wide variety of skills, though I am not an expert in nearly as many, I am constantly learning. Currently I am learning React in my spare time and am dedicated to learning anything else I don't already know. At my previous jobs, I quickly became an invaluable asset getting started almost immediately on undertaking large projects, frequently, as the sole front end developer on the project. A more detailed list of my experience and educational background is in my <NavLink className="link" to="/resume">resume</NavLink> and on my <a className="link" href={linkedin} target="_blank">LinkedIn page</a>.</p>
          <p>I am a super positive person, especially when in an environment I love being in – a tech world. I like to get a job done right the first time and I push myself to do better. I think of myself as being a very well rounded person because I can fit in anywhere. I love a large variety of different activities, hobbies, interests and cultures.</p>
        </div>
        {
          this.state.displayPersonal ? (
            <div id="personal">
              <hr />
              <h2>Personal Fun Facts and Insights!</h2>
              <ul>
                <li>I was born and raised in the country and I hold onto those roots. However, I also had the opportunity to live in New York City, NY (Lower Manhattan) for 2 1/2 years and was able to experience a lot of unique adventures in the big city!</li>
                <li>I grew up helping out on my Aunt's farm baling hay and growing tobacco</li>
                <li>I love riding horses</li>
                <li>I spent 2 months vacationing and exploring Colombia, South America and loved it there!</li>
                <li>Before I went back to college to become a developer, I was an Emergency Medical Technician (EMT)</li>
                <li>I have a miniature beagle named Sadie</li>
                <li>I like a large variety of music and genres, but my favorite artist is Lindsey Stirling!</li>
              </ul>
              <button className="btn-link orange" onClick={this.handleClick}>Skip the Personal Stuff</button>
            </div>
          ) : (
            <button className="btn-link orange" onClick={this.handleClick}>Me, Outside the Office</button>
          )
        }
      </section>
    );
  }
}

export default About;