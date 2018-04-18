import React,{ Component } from 'react'
import Form from '../Form';
import CardContainer from '../CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: []
    };
  };

  addIdea = (idea) => {
    const ideas = [ ...this.state.ideas, { id: Date.now(), ...idea }]
    this.setState({ ideas })
  }

  removeIdea = (id) => {
    const ideas = this.state.ideas.filter(idea => idea.id !== id);
    this.setState({ ideas });
  }

  render() {
    return (
      <div>
        <Form submitIdea={ this.addIdea }/>
        <CardContainer />
      </div>
    )
  }
};

export default App
