import React, { useEffect, useMemo, useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';


import '../../../scss/task-list.scss';

import withTasks from '../../../Context/Tasks/withTasks';
import ITask from '../../../Types/Tasks/Task';
import Task from './Task';
import Fade from '../../Modules/Animation/Fade';

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

    const [isFirstRender, setFirstRender] = useState(true);

    useEffect(() => {
        setFirstRender(false);
    }, []);

    return useMemo(() => (
        <main className="table">
            <Fade delay={100} className="fade-up">
            <div className="d-flex font-weight-bold table-row">
                <div className="table-row__column text-center">#</div>
                <div className="table-row__column text-center" />
                <div className="table-row__column">Name</div>
                <div className="table-row__column flex-grow-1 text-nowrap">Description</div>
                <div className="table-row__column text-center">Delete</div>
            </div>
            </Fade>
            {
                tasks.map((task: ITask, index: number) => (
                    <Task
                        isFirstRender={isFirstRender}
                        key={task.id}
                        task={task}
                        index={index + 1}
                    />
                ))
            }
        </main>
    ), [tasks]);
});

export default TaskList;
