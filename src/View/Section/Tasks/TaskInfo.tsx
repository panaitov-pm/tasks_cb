import React from 'react';
import TaskCount from './TaskCount';

/**
 * @interface Props
 */
interface Props {

}

/**
 * @return {any}
 * @constructor
 */
const TaskInfo: React.FC<Props> = (): any => {
    return (
        <header>
            <div className="row justify-content-between">
                <div className="col-xs p-3">
                    <h5>
                        TaskList / <TaskCount count={1} />
                    </h5>

                </div>
                <div className="col-xs p-3">
                    Create news
                </div>
            </div>
        </header>
    );
};

export default TaskInfo;
