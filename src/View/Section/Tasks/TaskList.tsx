import React, { memo } from 'react';

import '../../../scss/task-list.scss';

import withTasks from '../../../Context/Tasks/withTasks';
import ITask from '../../../Types/Tasks/Task';
import Task from './Task';

/**
 * @interface Props
 */
interface Props {
    setIsOpenTaskModal: (isOpen: boolean) => void;
}

/**
 * @type {(props: {readonly tasks?: any}) => any}
 */
const TaskList: React.FC<Props> = withTasks(({ tasks, setIsOpenTaskModal }): any => {
    return (
        <>
            <div className="table">
                <div className="d-flex font-weight-bold table-row">
                    <div className="table-row__column text-center">#</div>
                    <div className="table-row__column text-center" />
                    <div className="table-row__column">Name</div>
                    <div className="table-row__column flex-grow-1 text-nowrap">Description</div>
                    <div className="table-row__column text-center">Delete</div>
                </div>
                {
                    tasks.map((task: ITask, index: number) => (
                        <Task
                            key={task.id}
                            task={task}
                            index={index + 1}
                        />
                    ))
                }
            </div>
        </>
    );
});

export default memo(TaskList);
