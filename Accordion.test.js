import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
]

describe('Accordion component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders an empty <li /> when the sections prop is not supplied', () => {
        const wrapper = shallow(<Accordion />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders no sections as active by default', () => {
        const wrapper = shallow(<Accordion sections={sections}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        wrapper.find('.button0').simulate('click');
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('only opens one section at a time', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        wrapper.find('.button0').simulate('click');
        wrapper.find('.button2').simulate('click');
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    it('closes a section that is clicked twice', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('.button0').simulate('click');
        wrapper.find('.button0').simulate('click');
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});