import { useState, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../store/auth-context'

import {
  FormWrapper,
  LogoContainer,
  Logo,
  Title,
  FormItemContainer,
  FormAction,
} from './AuthFormElements'
import Button from '../Button'
import logo from '../../images/logo/logo.png'

const redirectRoute = '/home'

const AuthForm = () => {
  let navigate = useNavigate()

  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const emailInputRef = useRef()
  const pswInputRef = useRef()

  const authContext = useContext(AuthContext)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPsw = pswInputRef.current.value
    //add validation (optionnal)

    setIsLoading(true)
    let url
    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBX-MA6XQdvXiNlJt6T4NIsAYLogJlIEyM'
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBX-MA6XQdvXiNlJt6T4NIsAYLogJlIEyM'
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPsw,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false)
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then((data) => {
            let errorMessage = "L'authentification a échoué."
            if (data && data.error && data.error.message)
              errorMessage = data.error.message
            alert(errorMessage)
            throw new Error(errorMessage)
          })
        }
      })
      .then((data) => {
        //console.log(data)
        const expTime = new Date(new Date().getTime() + +data.expiresIn * 1000)
        authContext.login(data.idToken, expTime.toISOString())
        navigate(redirectRoute)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  return (
    <FormWrapper>
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>
      <Title>{isLogin ? 'Connexion' : 'Création de compte'}</Title>
      <form onSubmit={submitHandler}>
        <FormItemContainer>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </FormItemContainer>
        <FormItemContainer>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" required ref={pswInputRef} />
        </FormItemContainer>
        <FormAction>
          {!isLoading && (
            <Button text={isLogin ? 'Connexion' : 'Création de compte'} />
          )}
          {isLoading && <p>Chargement...</p>}
          <Button
            type="button"
            onClick={switchAuthModeHandler}
            text={
              isLogin
                ? 'Créer un nouveau compte'
                : 'Se connecter avec un compte existant'
            }
          />
        </FormAction>
      </form>
    </FormWrapper>
  )
}

export default AuthForm
