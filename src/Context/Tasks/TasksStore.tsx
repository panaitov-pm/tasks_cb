import React from 'react';

import TasksContext, { TasksContextProps } from './TasksContext';
import { Reducer, useContext, useReducer } from 'react';
import Task from '../../Types/Tasks/Task';

/**
 * @interface Props
 */
interface Props {
    getDefaultProps: () => Partial<TasksContextProps>;
}

/**
 * @interface Action
 */
interface Action {
    type: string;
    task: Task;
}

/**
 * @param {TasksContextProps} prevState
 * @param {Action} action
 * @return {TasksContextProps}
 */
const reducer: Reducer<TasksContextProps, Action> = (prevState, action): TasksContextProps => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...prevState,
                tasks: [
                    action.task,
                    ...prevState.tasks
                ],
            };
        default:
            return prevState;
    }
};

const TasksStore: React.FC<Props> = ({ children, getDefaultProps }) => {

    const tasks = useContext<TasksContextProps>(TasksContext);

    const [state, dispatch] = useReducer(reducer, {
        ...tasks,

        addTask: (task) => dispatch({type: 'ADD_TASK', task}),

        ...getDefaultProps,
    });

    return (
        <TasksContext.Provider value={{...state, ...getDefaultProps()}}>
            {children}
        </TasksContext.Provider>
    );
};

TasksStore.defaultProps = {
    getDefaultProps: () => ({}),
};

export default TasksStore;
