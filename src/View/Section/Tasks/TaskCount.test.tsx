import { shallow } from 'enzyme';
import * as React from 'react';
import TaskCount from './TaskCount';

describe('TaskCount', () => {

    it('should render 2 TaskCount', () => {
        const wrapper = shallow(
            <TaskCount count={2}/>
        );

        expect(wrapper.html()).toEqual("<h3>Task list / 2 items</h3>");
    });

    it('should`n render TaskCount', () => {
        const wrapper = shallow(
            <TaskCount count={0}/>
        );

        expect(wrapper.html()).toEqual(null);
    });

});
