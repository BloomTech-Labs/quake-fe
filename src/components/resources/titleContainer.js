import React from 'react';
import {TriangleUp} from './imageImports';

// title = title of section
// size = large-title to change styling to fit large title across 100% width
const TitleContainer = ({title, size}) => {
  const classes = (size === 'large-title') ? 'title-container large-title' :
  'title-container';
  return ( 
    <div className={classes}>
      <h2 className='section-title'>{title}</h2>
      <div className='jump-link-container'>
        <a href='#intro' className='jump-link'>
          <TriangleUp className='triangle-up' />
        </a>
      </div>
    </div>
   );
}
 
export default TitleContainer;