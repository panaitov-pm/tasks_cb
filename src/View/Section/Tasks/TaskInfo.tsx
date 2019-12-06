import React, { useMemo } from 'react';

import '../../../scss/task-info.scss'

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
        <header className="task-info">
            <div className="row justify-content-between">
                <div className="col-xs p-3">
                    <h5>
                        TaskList <TaskCount count={tasks.length} />
                    </h5>
                </div>
                <div className="col-xs p-3">
                    <AddButton
                        className="p-0 task-info__btn"
                        title="Create new"
                        onClick={() => setIsOpenTaskModal(true)}
                    />

                </div>
            </div>
        </header>
    ), [setIsOpenTaskModal, tasks.length]);
});

export default TaskInfo;
