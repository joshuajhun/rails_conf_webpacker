import React from 'react';
import CardContainer from '../CardContainer';
import { shallow } from 'enzyme';
import Card from '../Card'

describe('CardContainer UI tests', () => {
  it('CardContainer should render correct number of Cards to the DOM', () => {
    const stubbedIdeas = [ 
                          { id: 1, title: 'some title', body: 'somebody'},
                          { id: 2, title: 'some title2', body: 'somebody3'},
                         ]
    const renderedCardContainer = shallow(<CardContainer ideas={ stubbedIdeas } />);

    expect(renderedCardContainer.find(Card).length).toBe(2);
  })
});
