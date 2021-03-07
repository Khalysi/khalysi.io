import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SOCIAL_LINKS from './data/socialLinks';


class SocialLink extends Component {
  render() {
    const {link, image} = this.props.socialLink;

    return(
      <div>
        <a href={link} target="_blank"><FontAwesomeIcon icon={image} /></a>
      </div>
    )
  }
}

class SocialLinks extends Component {
  render() {
    return (
      <div id="socialLinks">
        {
          SOCIAL_LINKS.map(SOCIAL_LINK => {
            return (
              <SocialLink key={SOCIAL_LINK.id} socialLink={SOCIAL_LINK}/>
            );
          })
        }
        <p>Get in touch!</p>
      </div>
    );
  }
}

export default SocialLinks;