import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '', 
      body: ''
    }
  }
  submitIdeaToApp = (event) => {
    event.preventDefault();
    this.props.submitIdea(this.state)
  }

  updateInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <section>
        <form onSubmit={ this.submitIdeaToApp } >  
          <input name='title'
                 type='text'
                 placeholder='title'
                 value={ this.state.title }
                 onChange={ this.updateInput } />
          <input name='body'
                 type='text'
                 placeholder='body'
                 value={ this.state.body }
                 onChange={ this.updateInput } />
          <input type='submit' />
        </form>
      </section>
    )
  }
}

export default Form;
