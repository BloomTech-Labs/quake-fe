import React from 'react';

const DateFilter = ({handleChanges, starttime, endtime}) => {
  const filter = [
    {htmlFor: 'start-date', text: 'Start', id: 'start-date', type: 'date', name: 'starttime', value: starttime},
    {htmlFor: 'end-date', text: 'End', id: 'end-date', type: 'date', name: 'endtime', value: endtime},
  ]
  return ( 
    <fieldset className="date-field">
      <legend>Date Range:</legend>
      {filter.map((filter, index) => {return(
        <label key={index} htmlFor={filter.htmlFor}>{filter.text}
        <input
          id={filter.id}
          type={filter.type}
          name={filter.name}
          onChange={handleChanges}
          value={filter.value}
        />
      </label>
      )})}
    </fieldset>
   );
}
 
export default DateFilter;