import React, {Component} from 'react';
import squeaky from '../src/assets/imgs/squeaky.png';
import businesshouse from '../src/assets/imgs/business-house.png';
import squeakyLetter from './resources/Jessica Jenkins_Squeaky.pdf';
import businesshouseLetter from './resources/Jessica Jenkins_Business House.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

class References extends Component {
  render() {
    return (
      <section id="references" className="container">
        <h1>Letters of Recommendation from Previous Employers</h1>
        <div className="box">
          <h2>Working at Squeaky</h2>
          <img src={squeaky} alt="Squeaky Wheel Media Logo" />
          <p>Dear Hiring Manager:</p>
          <p>I hired her Jessica Jenkins as a Junior Programmer five and a half years ago to help with my Engineering department at Squeaky Wheel Media. During her tenure with Squeaky Jessica reported to me and my Technology Director where she was responsible for the development of many large projects including the NY State Lottery and IHadcancer.com.</p> 
          <p>Jessica is a quick learner, reliable, dependable and a born problem solver. Her ability to understand the dynamics of both design and Technology have enabled her to become an incredible full stack programmer today with a long list of client success under her belt. Jessica multitasks effectively and was able to handle a high-volume workload. She consistently met or surpassed her job requirements and was one of our strongest members on a multi-national team.</p>
          <p>Of important value to me as a business owner who concentrates on culture and office environment was Jessica's team player mindset, enthusiastic embrace of our office culture, and her ability to work with everyone in a highly stressful environment.  I regularly received unsolicited praise from fellow employees on Jessica’s outstanding level of commitment, assistance and follow-through.</p>
          <p>Jessica has my highest recommendation, and I am happy to furnish more details if you would like additional information.</p>
          <p className="signature">
            <span>Sincerely,</span>
            <span>Anthony Del Monte</span>
            <span>President</span>
            <span>Squeaky Wheel Media</span>
          </p>
          <div className="btn-wrap">
            <a className="btn-link orange" href="https://www.squeaky.com/" target="_blank">View Company Website</a>
            <a className="btn-link orange" href={squeakyLetter} target="_blank"><FontAwesomeIcon icon={faFileDownload} /> Download Letter</a>
          </div>
        </div>
        <div className="box">
          <h2>Working at Business House</h2>
          <img src={businesshouse} alt="Business House Logo" />
          <p>To Whom It May Concern:</p>
          <p>This letter is to address Miss. Jessica Jenkins. I had the pleasure of hiring Jessica and having her work on our marketing team. I can say that it is hard to come by dedicated, hard-working employees with a drive to learn more. However, Jessica is all of these things. She was punctual and always arrived to work with a positive attitude. Her ambition to dive head first into task was very much appreciated. She also brings forth knowledge of web development and digital marketing. While she was with us she was able to exercise her current knowledge as well as expand her skills in other areas of marketing, such as social media management and content marketing.</p> 
          <p>We are sure that Jessica will be an asset to any team she joins. Her previous knowledge, her drive to learn more, and dedication to her work are all strengths that she holds that are sure to set her apart. We wish her the most continued success and hope that you take the opportunity to have Jessica on your team. If you should have any questions regarding her qualifications and work experience in further detail, please feel free to reach me directly at <a className="link" href="mailto:lauren@businesshouse.club">lauren@businesshouse.club</a> or 270.401.3323.</p>
          <p className="signature">
            <span>Sincerely,</span>
            <span>Lauren Jones Drompt</span>
            <span>Owner</span>
            <span>Business House, LLC</span>
          </p>
          <div className="btn-wrap">
            <a className="btn-link orange" href="https://www.businesshouse.club/" target="_blank">View Company Website</a>
            <a className="btn-link orange" href={businesshouseLetter} target="_blank"><FontAwesomeIcon icon={faFileDownload} /> Download Letter</a>
          </div>
        </div>
      </section>
    );
  }
}

export default References;