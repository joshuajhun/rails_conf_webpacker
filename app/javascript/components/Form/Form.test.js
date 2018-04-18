import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

describe('Form Tests', () => {
  let renderedForm;
  let propFunction;

  beforeEach(() => {
    propFunction = jest.fn();
    renderedForm = shallow(<Form submitIdea={ propFunction } />)
  })

  describe('Form unit tests', () => {
    it('Form should have a default state of title and body both of which are empty strings', () => {
      const expectedTitle = '';
      const expectedBody = '';

      expect(renderedForm.state('title')).toEqual(expectedTitle);
      expect(renderedForm.state('body')).toEqual(expectedBody);
    });
    
    it('Form should receive a function as a prop', () => {
      expect(typeof renderedForm.instance().props.submitIdea).toBe('function')
    })

    it('When submitIdeaToApp() is invoked the prop function should be called', () => {
      const mockPreventDefault= jest.fn()

      renderedForm.instance().submitIdeaToApp({ preventDefault: mockPreventDefault });

      expect(propFunction).toHaveBeenCalled();
      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it('When submitIdeaToApp() is invoked it should be called with the correct params', () => {
      const expectation = { title: 'some title', body: 'some body' }
      
      renderedForm.setState({ title: 'some title', body: 'some body' })
      renderedForm.instance().submitIdeaToApp({ preventDefault: jest.fn() })

      expect(propFunction).toHaveBeenCalledWith(expectation)
    });

    it('When updateInput is invoked it should change the title portion of state', () => {
      const expectation = { title: 'some title', body: '' };
      const mockPreventDefalt = jest.fn();
      const mockEvent = { target: { preventDefault: mockPreventDefalt, value: 'some title', name: 'title' } }

      renderedForm.instance().updateInput(mockEvent);

      expect(renderedForm.state()).toEqual(expectation);
    });

    it('When updateInput is invoked it should change the title portion of state', () => {
      const expectation = { title: '', body: 'some body' };
      const mockPreventDefalt = jest.fn();
      const mockEvent = { target: { preventDefault: mockPreventDefalt, value: 'some body', name: 'body' } }

      renderedForm.instance().updateInput(mockEvent);

      expect(renderedForm.state()).toEqual(expectation);
    });
  });
  describe('App UI tests', () => {
    it('Form should render the correct inputs', () => {
      expect(renderedForm.find('form').length).toBe(1);
      expect(renderedForm.find('[type="text"]').length).toBe(2);
      expect(renderedForm.find('[type="submit"]').length).toBe(1);
    });
  });
});
