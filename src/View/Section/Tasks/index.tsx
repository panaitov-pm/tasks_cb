import React, { memo, useState } from 'react';
import uuidV4 from 'uuid/v4';

import '../../../scss/tasks.scss';
import TaskInfo from './TaskInfo';
import TasksStore, { TaskActions } from '../../../Context/Tasks/TasksStore';
import TaskList from './TaskList';
import TaskModal from './Modal/TaskModal';
import getItem from '../../../Helper/Storage/getItem';
import Fade from '../../Modules/Animation/Fade';


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

    const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);

    return (
        <div className="container">
            <TasksStore
                getDefaultProps={() => ({ tasks: getItem('tasks', []) })}
            >
                <Fade delay={0} className="fade-up">
                    <TaskInfo
                        setIsOpenTaskModal={setIsOpenTaskModal}
                    />
                </Fade>
                <TaskList
                    setIsOpenTaskModal={setIsOpenTaskModal}
                />
                <TaskModal
                    isOpen={isOpenTaskModal}
                    title="New Task"
                    action={TaskActions.ADD_TASK}
                    task={{
                        id: uuidV4(),
                        name: '',
                        description: ''
                    }}
                    onRequestClose={() => setIsOpenTaskModal(false)}
                    closeTaskModal={() => setIsOpenTaskModal(false)}
                />
            </TasksStore>

        </div>
    );
};

export default memo(Tasks);
