import React from 'react';
import LoginForm from './LoginForm'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const serverUrl = 'https://cors-anywhere.herokuapp.com/https://servdapi.herokuapp.com/api/auth/signin'

export class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value, error: null})
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const {data} = await axios.post(serverUrl, this.state)
    console.log("user data", data)
    if (data.id) {
      this.props.setUser(data)
      this.props.history.push('/')
    } else {
      console.log('ERROR')
      this.setState({error: "Invalid username and/or password"})
    }
  }

  render() {
    console.log(this.props)

    return (
      <LoginForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        state={this.state}
        />
    )
  }
}


export default withRouter(Login)
