import { Component } from 'react'

import './searchBox.styles.css'

const SearchBox = ({ onChangeHandler, className, placeholder }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default SearchBox
