import { createContext } from 'react';
import Task from '../../Types/Tasks/Task';

/**
 * @interface TasksContextProps
 */
export interface TasksContextProps {
    tasks: Task[];
    addTask: (task: Task) => void;
}

/**
 * @type {React.Context<TasksContextProps>}
 */
const TasksContext = createContext<TasksContextProps>({
    tasks: [],
    addTask: () => {}
});

export default TasksContext;
