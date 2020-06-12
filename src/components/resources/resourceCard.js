import React from 'react';

// image component with alt tag, phone#, email, website url
// emailSize = smaller for larger text to fit in card
// websiteSize = smaller for larger text to fit in card
const ResourceCard = ({image, alt, name, phone, email, website, emailSize, websiteSize}) => {
  const emailClasses = (emailSize === 'smaller') ? 'resource-email smaller' :
  'resource-email';
  const websiteClasses = (websiteSize === 'smaller') ? 'resource-highlight website smaller' :
  'resource-highlight website';
  return ( 
    <div className='resource-card'>
      <img src={image} className='resource-logo' alt={alt}/>
      <h4 className='resource-name'>{name}</h4>
      <p className='resource-phone'>Phone: 
        <span className='resource-highlight'>{phone}</span>
      </p>
      <p className={emailClasses}>Email: 
        <span className='resource-highlight'>{email}</span>
      </p>
      <a href={website} target='_blank' rel='noopener noreferrer' className={websiteClasses}>
        {website}
      </a>
    </div>
   );
}
 
export default ResourceCard;