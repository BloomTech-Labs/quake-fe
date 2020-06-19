import React from 'react';
import {BulletPlus} from './imageImports';

// items added to list
export const items = ['Bandages', 'Gauze', 'Antiseptic', 'Pain relievers (ibuprofen)', 'Space blanket', 'Dust mask', 'Working gloves', 'Comfortable walking shoes', 'Flashlight', 'Whistle or noise-maker to call for help', 'Bottled water', 'Canned food', 'Large food storage bags', 'Colored paper or markers to mark areas safe to walk over'];

const ListTypePlus = () => {
  return ( 
    <ul className='list-type-plus'>
      {items.map((item, index) => {
        return <li className='list-item' key={index}><BulletPlus className='bullet-plus'/>{item}</li>
      })}
    </ul>
   );
}
 
export default ListTypePlus;