import {
  createUserDocumnetFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup()

    console.log(response)
    const userDocRef = createUserDocumnetFromAuth(response.user)
  }

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google Provider</button>
    </div>
  )
}

export default SignIn
