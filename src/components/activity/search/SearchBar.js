import React from 'react'
import Geocoder from './Geocoder'

const SearchBar = () => {
  return (
    <div className='search-container'>
      <div className='search-bar'>
        {/* Search Icon */}
        <Geocoder/>
        {/* Current Location Button */}
      </div>
      {/* Filter Button */}
    </div>
  )
}

export default SearchBar;