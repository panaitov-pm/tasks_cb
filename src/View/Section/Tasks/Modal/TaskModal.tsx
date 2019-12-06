import * as React from 'react';
import { memo, useEffect, useState } from 'react';
import ITask from '../../../../Types/Tasks/Task';
import MainModal, { MainModalProps } from '../../../Modules/Modal/MainModal';
import setObjectItem from '../../../../Helper/Object/setObjectItem';

/**
 * @interface Props
 */
interface Props extends MainModalProps {
    title: string;
    task: ITask;
}

/**
 * @param {string} title
 * @param {ITask} task
 * @param {Pick<Props & {children?: React.ReactNode}, "isOpen" | "style" | "portalClassName" | "bodyOpenClassName" | "htmlOpenClassName" | "className" | "overlayClassName" | "appElement" | "onAfterOpen" | "onAfterClose" | "onRequestClose" | "closeTimeoutMS" | "ariaHideApp" | "shouldFocusAfterRender" | "shouldCloseOnOverlayClick" | "shouldCloseOnEsc" | "shouldReturnFocusAfterClose" | "parentSelector" | "aria" | "data" | "role" | "contentLabel" | "contentRef" | "overlayRef" | "testId" | "children">} props
 * @return {any}
 * @constructor
 */
const TaskModal: React.FC<Props> = ({ title, task, ...props }): any => {

    const [taskInfo, setTaskInfo] = useState(task);

    // Set modal Task if props Task was changed during opening modal window
    useEffect(() => {
        props.isOpen && setTaskInfo(task);
    }, [task]);

    return (
        <MainModal
            {...props}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button
                        onClick={props.onRequestClose}
                        type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form className="" id="task-form" noValidate={true}>
                        <div className="form-group">
                            <label htmlFor="task-name" className="col-form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="task-name"
                                placeholder="Enter Name"
                                value={taskInfo.name}
                                onChange={({ target }) => setTaskInfo(setObjectItem(taskInfo, { name: target.value }))}
                                required={true}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid name.
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="task-description" className="col-form-label">Description:</label>
                            <textarea
                                className="form-control"
                                id="task-description"
                                placeholder="Enter Description"
                                value={taskInfo.description}
                                onChange={({ target }) => setTaskInfo(setObjectItem(taskInfo, { description: target.value }))}
                                required={true}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid description.
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={props.onRequestClose}
                    >
                        Cancel
                    </button>
                    <button type="submit" form="task-form" className="btn btn-primary">Saves</button>
                </div>
            </div>
        </MainModal>
    );
};

export default memo(TaskModal);
