import React from 'react';
import ViewAccountForm from './ViewAccountForm'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

const serverUrl = 'https://cors-anywhere.herokuapp.com/https://servdapi.herokuapp.com/api/auth'


export class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    try {
      console.log('handle submit state', this.state)
      console.log('handle submit props', this.props)
      const {data} = await axios.get(serverUrl, this.state)
      console.log('this is data', data)
    } catch (err) {
      console.log(err)
    }
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

export default withRouter(Account)
