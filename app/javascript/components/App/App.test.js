import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import Form from '../Form';
import CardContainer from '../CardContainer';

describe('App tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  describe('App unit tests', () => {
    it('App should have a default state of ideas with an empty array', () => {
      expect(renderedApp.state('ideas')).toEqual([]);
    });

    it('When addIdea is invoked it should add idea to state correctly', () => {
      const expectation = [ 
                            expect.objectContaining({ id: expect.any(Number), 
                                                      title: 'some title', 
                                                      body: 'some body'
                                                    }) 
                          ];

      renderedApp.instance().addIdea({title: 'some title', body: 'some body' });

      expect(renderedApp.state('ideas')).toEqual(expectation);
    });

    it('When removeIdea is invoked it should remove correct idea from state', () => {
      const expectation  = [
                            { id: 1, title: 'rails conf tho', body: 'is pretty dope' }, 
                            { id: 3, title: 'remove me', body: 'now' }
                           ];
      const currentState = [
                            { id: 1, title: 'rails conf tho', body: 'is pretty dope' },
                            { id: 2, title: 'new title', body: 'new body' }, 
                            { id: 3, title: 'remove me', body: 'now' }
                           ];

      renderedApp.setState({ ideas: currentState });
      renderedApp.instance().removeIdea(2);
      
      expect(renderedApp.state('ideas')).toEqual(expectation);
    });
  });
  describe('App UI tests', () => {
    it('App should render a form', () => {
      const expectedLength = 1;

      expect(renderedApp.find(Form).length).toBe(expectedLength)
    });

    it('App should render a CardContainer', () => {
      const expectedLength = 1 

      expect(renderedApp.find(CardContainer).length).toBe(expectedLength);
    });
  });
});
