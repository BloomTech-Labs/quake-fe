import React from 'react';

const RadiusFilter = ({handleChanges, maxradiuskm}) => {
  return ( 
    <fieldset className="radius-field">
      <legend>Search Radius:</legend>

      <label htmlFor="kilometers">
        Kilometers
        <input
          id="kilometers"
          type="number"
          name="maxradiuskm"
          onChange={handleChanges}
          value={maxradiuskm}
          min="1"
          max="20001.6"
          step="0.1"
          data-testid="input-km"
        />
      </label>
    </fieldset>
   );
}
 
export default RadiusFilter;