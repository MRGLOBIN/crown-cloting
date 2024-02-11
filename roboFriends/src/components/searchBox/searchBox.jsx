import React from 'react'

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue outline-0"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
