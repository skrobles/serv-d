import React from 'react';
import Album from './Album'
import axios from 'axios'
import {Route, Switch} from 'react-router-dom'
import SingleRecipeView from './singleRecipeView';

export default class AllRecipesView extends React.Component {
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
        this.setState({ [evt.target.name]: evt.target.value })
    }

    async handleSubmit(evt) {
        evt.preventDefault()
    }

    render() {
        return (
            <Album onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state} />
        )
    }
}