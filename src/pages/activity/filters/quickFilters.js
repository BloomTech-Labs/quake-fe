import React from 'react';

const filter = [
  {link: 'https://quakelabs-be-production.herokuapp.com/api/activity/alltime-biggest', text: 'All Time Biggest'},
  {link: 'https://quakelabs-be-production.herokuapp.com/api/nukes/boom', text: 'Caused by Nukes'},
  {link: 'https://quakelabs-be-production.herokuapp.com/api/tsunami/splash', text: 'Caused a Tsunami'},
]

const QuickFilters = ({quickFilters}) => {
  return ( 
    <fieldset id="quick-filters" className="quick-filters">
      <legend id='quick-filters-label'>Quick Filters</legend>
      <div id="quick-filters-flex" className="quick-filters-flex">
      {filter.map((filter, index) => { return (
          <button onClick={quickFilters} className="quick-filters-button"
            name={filter.link} key={index}>{filter.text}
          </button>
        )})}
      </div>
    </fieldset>
   );
}
 
export default QuickFilters;