import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';

describe('Card UI tests', () => {
  it('Card should render the correct markup when given props', () => {
    const expectedTitle = 'some title';
    const expectedBody = ' some body';
    const renderedCard = shallow(<Card title='some title'
                                       body='some body' />);

    expect(renderedCard.find('.idea-title').text()).toEqual(expectedTitle);
    expect(renderedCard.find('.idea-body').text()).toEqual(expectedBody);
    expect(renderedCard.find('button').length).toBe(1);
  });
  
  it('When Card button is clicked it should fire function with correct arguments', () => {
    const mockRemoveIdea = jest.fn()
    const expectedArgument = 1
    const renderedCard = shallow(<Card title='some title'
                                       body='some body'
                                       id={ 1 }
                                       removeIdea={ mockRemoveIdea } />);
    const removeButton = renderedCard.find('button');

    removeButton.simulate('click')

    expect(mockRemoveIdea).toHaveBeenCalledWith(expectedArgument);
  });
});
