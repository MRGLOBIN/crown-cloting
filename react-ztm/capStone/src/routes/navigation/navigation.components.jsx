import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'

import { SignOurUser } from '../../utils/firebase.utils'

import CrownLogo from '../../assets/crown.svg'

import './navigation.styles.scss'
import CartIcon from '../../components/cardIcon/cartIcon.components'
import CartDropdown from '../../components/cartDropdown/cartDropdown.conponents'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={CrownLogo} alt='CrownLogo' className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={SignOurUser}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='auth'>
              Sign In
            </Link>
          )}
          {<CartIcon />}
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation
