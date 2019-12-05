import React from 'react';

import '../../../scss/tasks.scss';
import TaskInfo from './TaskInfo';
import TasksStore from '../../../Context/Tasks/TasksStore';

/**
 * @interface Props
 */
interface Props {

}

/**
 * @return {any}
 * @constructor
 */
const Tasks: React.FC<Props> = () => {
    return (
        <div className="container">
            <TasksStore
                getDefaultProps={() => ({})}
            >
                <TaskInfo />
            </TasksStore>

        </div>
    );
};

export default Tasks;
