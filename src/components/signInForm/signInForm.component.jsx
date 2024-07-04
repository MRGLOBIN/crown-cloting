import { useState } from 'react'
import {
  SignInAuthUserWithEmailAndPassword,
  createUserDocumnetFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.utils'

import FormInput from '../formInput/formInput.component'
import Button from '../button/button.component'

import './signInForm.styles.scss'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFileds, setFormField] = useState(defaultFormFields)

  const { email, password } = formFileds

  const onChangeHandler = event => {
    const { name, value } = event.target
    setFormField({ ...formFileds, [name]: value })
  }

  const resetFormFiled = () => {
    setFormField(defaultFormFields)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { user } = await SignInAuthUserWithEmailAndPassword(email, password)
      resetFormFiled()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password for email')
          break
        case 'auth/user-not-found':
          alert('No user associated with this email')
          break
        default:
          console.log(error.message)
      }
    }
  }

  const GoogleSignIn = async () => {
    await signInWithGooglePopup()
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={GoogleSignIn}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
