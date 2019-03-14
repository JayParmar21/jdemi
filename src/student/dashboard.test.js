import React from 'react';
import { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

var ShallowRenderer = require('react-test-renderer/shallow'); // ES5 with npm
const TestRenderer = require('react-test-renderer'); // ES5 with npm


configure({ adapter: new Adapter() }) //enzyme is connected
import Dashboard from './dashboard'
import Cmp from '../cmp/cmp'
import Counter from './Counter'


describe("testing component", () => {

    // it('renders correctly', () => {
    //     const wrapper = shallow(<Dashboard />);
    //     expect(wrapper).toMatchSnapshot(); 
    // });

    it('finds cmp', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Cmp />);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
            <p>Student data</p>,
            <h1>hello</h1>,
            <p className="my">Hello</p>
        ]);
    })

    it('check content' , () => {
        const testRenderer = TestRenderer.create(<Cmp />);
        const testInstance = testRenderer.root;
        //console.log("instance::",testInstance)
        expect(testInstance.findByProps({className: "my"}).children).toEqual(['Hello']);
        expect(testInstance.findByType('h1').children).toEqual(['hello']);
    })

    it('Counter wrapper has given class' , () => {
        const wrapper = shallow(<Counter/>)
        //expect(wrapper.find('div').hasClass('subclass')).toBe(true)
        expect(wrapper.find('button').length).toBe(1)
    })

    it('Counter contains <p></p>', () => {
        const wrapper = shallow(<Counter/>)
        expect(wrapper.contains([<h1>hello</h1>])).toBe(true)
        })

    it('check disabled' , ()=> {
        const wrapper = shallow(<Counter/>)
        expect(wrapper.find('#disabled')).root.toBe('input')
    })
});