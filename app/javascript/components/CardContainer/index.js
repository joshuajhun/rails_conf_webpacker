import React from 'react';
import Card from '../Card';

const CardContainer = ({ ideas, removeIdea }) =>  {
  const renderedIdeas = ideas.map(idea => <Card key={ idea.id }
                                                title={ idea.title }
                                                body={ idea.body }
                                                id={ idea.id}
                                                removeIdea={ removeIdea }
                                                />);

  return (
    <section>
      { renderedIdeas }
    </section>
  )
}

export default CardContainer;
