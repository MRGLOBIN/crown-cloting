import SignInForm from '../../components/signInForm/signInForm.component'
import SignupForm from '../../components/signupForm/signupForm.component'

import './auth.styles.scss'

const Auth = () => {
  return (
    <div className="auth-constainer">
      <SignInForm />
      <SignupForm />
    </div>
  )
}

export default Auth
