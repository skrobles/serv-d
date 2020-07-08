import React from 'react';
import ViewAccountForm from './ViewAccountForm'
import axios from 'axios'


export default class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      state: '',
      country: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  async handleSubmit(evt) {
    evt.preventDefault()

  }

  render() {
    return (
      <ViewAccountForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        state={this.state}
        />
    )
  }
}
