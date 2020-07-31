import React from 'react';

const MagFilter = ({handleChanges, minmagnitude, maxmagnitude }) => {
  const filter = [
    {htmlFor: 'start-magnitude', text: 'Start', id: 'start-magnitude', type: 'number', name: 'minmagnitude', min: '0', max: '10', step: '0.1', value: minmagnitude},
    {htmlFor: 'end-magnitude', text: 'End', id: 'end-magnitude', type: 'number', name: 'maxmagnitude', min: '0', max: '10', step: '0.1', value: maxmagnitude},
  ]
  return ( 
    <fieldset className="mag-field">
      <legend>Magnitude Range:</legend>
      {filter.map((filter, index) => {return(
        <label key={index} htmlFor={filter.htmlFor}>{filter.text}
        <input
          id={filter.htmlFor}
          type={filter.type}
          name={filter.name}
          min={filter.min}
          max={filter.max}
          step={filter.step}
          onChange={handleChanges}
          value={filter.value}
        />
      </label>
      )})}
    </fieldset>
   );
}
 
export default MagFilter;