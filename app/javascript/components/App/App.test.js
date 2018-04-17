import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App tests', () => {
  describe('App unit tests', () => {
    it('amIAtRailsConf() should return true', () => {
      const renderedApp = shallow(<App />);
      
      expect(renderedApp.instance().amIAtRailsConf()).toBe(true);
    });
  });
});
