import { createContext } from 'react';
import ITask from '../../Types/Tasks/Task';

/**
 * @interface TasksContextProps
 */
export interface TasksContextProps {
    tasks: ITask[];
    addTask: (task: ITask) => void;
    removeTask: (id: string) => void;
}

/**
 * @type {React.Context<TasksContextProps>}
 */
const TasksContext = createContext<TasksContextProps>({
    tasks: [],
    addTask: () => {
    },
    removeTask: () => {
    },
});

export default TasksContext;
