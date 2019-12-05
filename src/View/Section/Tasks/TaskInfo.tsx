import React from 'react';
import TaskCount from './TaskCount';
import withTasks from '../../../Context/Tasks/withTasks';

/**
 * @interface Props
 */
interface Props {

}

/**
 * @return {any}
 * @constructor
 */
const TaskInfo: React.FC<Props> = withTasks(({tasks}): any => {
    return (
        <header>
            <div className="row justify-content-between">
                <div className="col-xs p-3">
                    <h5>
                        TaskList <TaskCount count={tasks.length} />
                    </h5>

                </div>
                <div className="col-xs p-3">
                    Create news
                </div>
            </div>
        </header>
    );
});

export default TaskInfo;
