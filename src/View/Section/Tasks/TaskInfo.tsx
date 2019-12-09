import React, { useMemo } from 'react';

import TaskCount from './TaskCount';
import withTasks from '../../../Context/Tasks/withTasks';
import AddButton from './AddButton';

/**
 * @interface Props
 */
interface Props {
    setIsOpenTaskModal: (isOpen: boolean) => void
}

/**
 * @return {any}
 * @constructor
 */
const TaskInfo: React.FC<Props> = withTasks(({ tasks, setIsOpenTaskModal }): any => {
    return useMemo(() => (
        <header className="task-info mb-md-5">
            <div className="row justify-content-between">
                <div className="col-xs p-3 pt-md-5 pl-md-4">
                    <h5 className="task-info__title">
                        Task list <TaskCount count={tasks.length} />
                    </h5>
                </div>
                <div className="col-xs p-3 pt-md-5 pr-md-4">
                    <AddButton
                        className="p-0 task-info__btn"
                        title="Create new"
                        onClick={() => setIsOpenTaskModal(true)}
                    />

                </div>
            </div>
        </header>
    ), [tasks.length]);
});

export default TaskInfo;
