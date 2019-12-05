import { shallow } from 'enzyme';
import * as React from 'react';
import TaskCount from './TaskCount';

describe('TaskCount', () => {

    it('should render 2 items', () => {
        const wrapper = shallow(
            <TaskCount count={2}/>
        );

        expect(wrapper.html()).toEqual("2 items");
    });

    it('should render 1 item', () => {
        const wrapper = shallow(
            <TaskCount count={1}/>
        );

        expect(wrapper.html()).toEqual("1 item");
    });

    it('should`n render TaskCount', () => {
        const wrapper = shallow(
            <TaskCount count={0}/>
        );

        expect(wrapper.html()).toEqual(null);
    });

});
