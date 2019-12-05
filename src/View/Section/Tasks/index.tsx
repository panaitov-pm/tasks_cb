import React from 'react';

import '../../../scss/tasks.scss';
import TaskInfo from './TaskInfo';

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
            <TaskInfo />
        </div>
    );
};

export default Tasks;
