import React from 'react';
import {BulletSolid} from './imageImports';

const ListTypeSolid = () => {
    // items added to list
    const items = ['Blow on a whistle in bursts of three until help arrives.', 'Flick a light on and off until help arrives.', 'Shine a flashlight in a dark area.', 'Yell loudly.', 'Tap on piping or other objects that can carry sound.'];
    
  return ( 
    <ul className='list-type-solid'>
      {items.map((item, index) => {
        return <li className='list-item' key={index}><BulletSolid className='bullet-solid'/>{item}</li>
      })}
    </ul>
   );
}
 
export default ListTypeSolid;