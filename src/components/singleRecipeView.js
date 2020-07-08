import React from 'react';
import SingleRecipe from './singleRecipe'
import axios from 'axios';
import { super } from '@babel/types';

export default class SingleRecipeView extends React.Component {
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
            <SingleRecipe onChange={this.handleChange} onSubmit={this.handleSubmit} state={this.state} />
        )
    }
}