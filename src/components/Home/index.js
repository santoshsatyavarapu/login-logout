// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message/index'

import Login from '../Login/index'

import Logout from '../Logout/index'

class Home extends Component {
  state = {isLoggedIn: false, message: 'Please Login'}

  letLogin = () => {
    this.setState({isLoggedIn: true, message: 'Welcome User'})
  }

  letLogout = () => {
    this.setState({isLoggedIn: false, message: 'Please Login'})
  }

  render() {
    const {isLoggedIn} = this.state
    const {message} = this.state
    let authButton
    if (isLoggedIn) {
      authButton = <Logout action={this.letLogout} />
    } else {
      authButton = <Login action={this.letLogin} />
    }
    return (
      <div className="container">
        <div className="sub-container">
          <Message text={message} />
          {authButton}
        </div>
      </div>
    )
  }
}

export default Home
