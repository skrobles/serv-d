import React from 'react';
import LoginForm from './LoginForm'
import axios from 'axios'

const serverUrl = 'https://cors-anywhere.herokuapp.com/https://servdapi.herokuapp.com/api/auth/signin'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const {data} = await axios.post(serverUrl, this.state)
    this.props.setUser(data)
  }

  render() {
    return (
      <LoginForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        state={this.state}
        />
    )
  }
}
