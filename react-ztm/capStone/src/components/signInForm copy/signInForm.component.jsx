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
      const response = await SignInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFiled()
    } catch (error) {
      console.log(error.message)
    }
  }

  const GoogleSignIn = async () => {
    const response = await signInWithGooglePopup()

    console.log(response)
    const userDocRef = createUserDocumnetFromAuth(response.user)
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
          <Button type="submit" buttonType="google" onClick={GoogleSignIn}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm
