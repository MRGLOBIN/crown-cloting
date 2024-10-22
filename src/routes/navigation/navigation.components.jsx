// import { useContext } from 'react'
import { Outlet } from 'react-router-dom'

// import { UserContext } from '../../contexts/user.context'
// import { CartContext } from '../../contexts/cart.context'

import { SignOurUser } from '../../utils/firebase.utils'

import CrownLogo from '../../assets/crown.svg'

import CartIcon from '../../components/cardIcon/cartIcon.components'
import CartDropdown from '../../components/cartDropdown/cartDropdown.conponents'

import {
  NavigationConatiner,
  LogoContainer,
  NavLink,
  NavLinks,
} from './navigation.styles'

import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectIsCartOpen } from '../../store/cart/cart.selector'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  // const { currentUser } = useContext(UserContext)
  // const { isCartOpen } = useContext(CartContext)

  return (
    <>
      <NavigationConatiner>
        <LogoContainer className='logo-container' to='/'>
          <img src={CrownLogo} alt='CrownLogo' className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink className='nav-link' to='shop'>
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={SignOurUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink className='nav-link' to='auth'>
              Sign In
            </NavLink>
          )}
          {<CartIcon />}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationConatiner>
      <Outlet />
    </>
  )
}

export default Navigation
