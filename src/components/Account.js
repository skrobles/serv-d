import React from 'react';
import ViewAccountForm from './ViewAccountForm';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const serverUrl = '/api/auth';

export class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.appState.user);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    console.log('>>>>> handle submit', this.state);
    try {
      if (this.state.id !== null) {
        const { data } = await axios.put(`${serverUrl}`, this.state);
        this.props.setUser(data);
        console.log('this is handle submit data', data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <ViewAccountForm
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}

export default withRouter(Account);
