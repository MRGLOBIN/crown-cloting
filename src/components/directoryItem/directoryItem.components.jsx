import { Link } from 'react-router-dom'

import './directoryItem.styles.scss'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, link } = category
  return (
    <Link to={link} className='directory-item-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  )
}

export default DirectoryItem
