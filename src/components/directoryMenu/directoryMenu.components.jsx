import { linkWithCredential } from 'firebase/auth'
import DirectoryItem from '../directoryItem/directoryItem.components'

import './DirectoryMenu.styles.scss'

const DirectoryMenu = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      link: 'shop/hats',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      link: 'shop/jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/jackets.png',
      link: 'shop/sneakers',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      link: 'shop/womens',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      link: 'shop/mens',
    },
  ]

  return (
    <div className='categories-container'>
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default DirectoryMenu
