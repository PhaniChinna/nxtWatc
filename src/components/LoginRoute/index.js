import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccessData = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitSuccess = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccessData(data.jwt_token)
    } else {
      this.onSubmitFailureData(data.error_msg)
    }
  }

  render() {
    const {username, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="LoginPage-container">
        <div className="LoginPage1-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            className="LoginPage-logo"
            alt="website logo"
          />
          <form
            className="Login-Form-container"
            onSubmit={this.onSubmitSuccess}
          >
            <label htmlFor="username" className="Login-label-user">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="Login-input-label"
              placeholder="Username"
              onChange={this.onChangeUserName}
            />
            <label className="Login-password-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              className="Login-password-input"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <input
              id="showPassword"
              type="Checkbox"
              className="Login-checkbox"
            />
            <div className="LogIn-Show-Password-container">
              <label htmlFor="showPassword" className="Label-ShowPassword-cont">
                Show Password
              </label>
            </div>
            <button className="Login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
