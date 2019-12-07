import React, { Reducer, useContext, useReducer } from 'react';

import TasksContext, { TasksContextProps } from './TasksContext';
import ITask from '../../Types/Tasks/Task';

/**
 * @interface Props
 */
interface Props {
    getDefaultProps: () => Partial<TasksContextProps>;
}

export enum TaskActions {
    ADD_TASK = 'ADD_TASK',
    EDIT_TASK = 'EDIT_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
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
        case TaskActions.ADD_TASK:
            return {
                ...prevState,
                tasks: [
                    action.task,
                    ...prevState.tasks
                ],
            };
        case TaskActions.EDIT_TASK:
            return {
                ...prevState,
                tasks: prevState.tasks.map(task => {
                    if (task.id !== action.task.id) return task;

                    return {
                        ...task,
                        ...action.task,
                    };
                }),
            };
        case TaskActions.REMOVE_TASK:
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

        addTask: (task: ITask) => dispatch({ type: TaskActions.ADD_TASK, task }),
        editTask: (task: ITask) => dispatch({ type: TaskActions.EDIT_TASK, task }),
        removeTask: (taskId: string) => dispatch({ type: TaskActions.REMOVE_TASK, taskId }),

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
