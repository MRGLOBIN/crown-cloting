import SignInForm from '../../components/signInForm copy/signInForm.component'
import SignupForm from '../../components/signupForm/signupForm.component'

const Auth = () => {
  return (
    <div className=".auth-constainer">
      <h1>Sign In</h1>
      <SignInForm />
      <SignupForm />
    </div>
  )
}

export default Auth
