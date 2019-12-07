import React, { Reducer, useContext, useReducer } from 'react';

import TasksContext, { TasksContextProps } from './TasksContext';
import ITask from '../../Types/Tasks/Task';

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
    task?: ITask;
    taskId?: string;
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
        case 'REMOVE_TASK':
            return {
                ...prevState,
                tasks: prevState.tasks.filter(task => task.id !== action.taskId)
            };
        default:
            return prevState;
    }
};

/**
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @param {() => Partial<TasksContextProps>} getDefaultProps
 * @return {any}
 * @constructor
 */
const TasksStore: React.FC<Props> = ({ children, getDefaultProps }) => {

    const tasks = useContext<TasksContextProps>(TasksContext);

    const [state, dispatch] = useReducer(reducer, {
        ...tasks,

        addTask: (task: ITask) => dispatch({ type: 'ADD_TASK', task }),
        removeTask: (taskId: string) => dispatch({ type: 'REMOVE_TASK', taskId }),

        ...getDefaultProps,
    });

    return (
        <TasksContext.Provider value={{ ...state, ...getDefaultProps() }}>
            {children}
        </TasksContext.Provider>
    );
};

TasksStore.defaultProps = {
    getDefaultProps: () => ({}),
};

export default TasksStore;
