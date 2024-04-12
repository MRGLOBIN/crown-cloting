// import { ChangeEventHandler } from 'react'
import { ChangeEvent } from 'react'
import './searchBox.styles.css'

type SearchBoxProps = {
  className: string
  placeholder?: string
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={e => onChangeHandler(e)}
    />
  )
}

export default SearchBox
