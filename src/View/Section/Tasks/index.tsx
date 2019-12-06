import React, { memo, useState } from 'react';
import uuidV4 from 'uuid/v4';

import '../../../scss/tasks.scss';
import TaskInfo from './TaskInfo';
import TasksStore from '../../../Context/Tasks/TasksStore';
import TaskList from './TaskList';
import TaskModal from './Modal/TaskModal';


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
                getDefaultProps={() => ({})}
            >
                <TaskInfo
                    setIsOpenTaskModal={setIsOpenTaskModal}
                />
                <TaskList
                    setIsOpenTaskModal={setIsOpenTaskModal}
                />
                <TaskModal
                    isOpen={isOpenTaskModal}
                    title="New Task"
                    task={{
                        id: uuidV4(),
                        name: '',
                        description: ''
                    }}
                    onRequestClose={() => setIsOpenTaskModal(false)}
                />
            </TasksStore>

        </div>
    );
};

export default memo(Tasks);
