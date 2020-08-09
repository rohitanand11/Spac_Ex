import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App component',()=>{
    it('renders without crashing',()=>{
        shallow(<App/>);
    });

    it('should have an Class App',()=>{
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App')).toHaveLength(1);
    });
})