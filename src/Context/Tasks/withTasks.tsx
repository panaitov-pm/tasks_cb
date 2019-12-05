import * as React from 'react';
import { ComponentType } from 'react';
import TasksContext, { TasksContextProps } from './TasksContext';

/**
 * @param {React.ComponentType<Props & TasksContextProps>} Component
 * @return {(props: Props) => any}
 */
const withTasks = <Props extends object>(Component: ComponentType<Props & TasksContextProps>) => (props: Props) => (
    <TasksContext.Consumer>
        {tasks => <Component {...props} {...tasks} />}
    </TasksContext.Consumer>
);

export default withTasks;
