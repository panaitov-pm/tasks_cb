import React, { memo } from 'react';
import RemoveButton from './RemoveButton';
import ITask from '../../../Types/Tasks/Task';
import ImgIcon from '../../Modules/Icon/ImgIcon';

/**
 * @interface Props
 */
interface Props {
    task: ITask
    index: number;
}

const Task: React.FC<Props> = ({ task, index }): any => {
    return (
        <div className="d-flex table-row">
            <div className="table-row__column text-center"><span>{index}.</span></div>
            <div className="table-row__column text-center">
                <ImgIcon
                    src="/icons/envelope.png"
                    alt="Task"
                />
            </div>
            <div className="table-row__column text-nowrap overflow-hidden">{task.name}</div>
            <div className="table-row__column flex-grow-1 text-nowrap overflow-hidden">{task.description}</div>
            <div className="table-row__column text-center">
                <RemoveButton
                    title="Delete"
                    onClick={() => {
                    }}
                />
            </div>
        </div>
    );
};

export default memo(Task);
