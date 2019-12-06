import { createContext } from 'react';
import ITask from '../../Types/Tasks/Task';

/**
 * @interface TasksContextProps
 */
export interface TasksContextProps {
    tasks: ITask[];
    addTask: (task: ITask) => void;
}

/**
 * @type {React.Context<TasksContextProps>}
 */
const TasksContext = createContext<TasksContextProps>({
    tasks: [],
    addTask: () => {}
});

export default TasksContext;
