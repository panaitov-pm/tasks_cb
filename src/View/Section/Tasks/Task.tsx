import React, { useMemo, useState } from 'react';
import RemoveButton from './RemoveButton';
import ITask from '../../../Types/Tasks/Task';
import ImgIcon from '../../Modules/Icon/ImgIcon';
import withTasks from '../../../Context/Tasks/withTasks';
import TaskModal from './Modal/TaskModal';
import { TaskActions } from '../../../Context/Tasks/TasksStore';

/**
 * @interface Props
 */
interface Props {
    task: ITask
    index: number;
}

/**
 * @type {(props: {readonly task?: any; readonly removeTask?: any; readonly index?: any}) => any}
 */
const Task: React.FC<Props> = withTasks(({ task, index, removeTask }): any => {
    const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);

    return useMemo(() => (
        <>
            <div className="d-flex table-row">
                <div className="table-row__column text-center"><span>{index}.</span></div>
                <div className="table-row__column text-center">
                    <ImgIcon
                        src="/icons/envelope.png"
                        alt="Task"
                    />
                </div>
                <div
                    className="table-row__column text-nowrap overflow-hidden"
                    onClick={() => setIsOpenTaskModal(true)}
                >
                    {task.name}
                </div>
                <div className="table-row__column flex-grow-1 text-nowrap overflow-hidden">{task.description}</div>
                <div className="table-row__column text-center">
                    <RemoveButton
                        title="Delete"
                        onClick={() => removeTask(task.id)}
                    />
                </div>
            </div>
            <TaskModal
                isOpen={isOpenTaskModal}
                title="Edit Task"
                task={task}
                action={TaskActions.EDIT_TASK}
                onRequestClose={() => setIsOpenTaskModal(false)}
                closeTaskModal={() => setIsOpenTaskModal(false)}
            />
        </>
    ), [task, index, isOpenTaskModal]);
});

export default Task;
