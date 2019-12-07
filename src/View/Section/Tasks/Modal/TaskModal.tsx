import * as React from 'react';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import classNames from 'classnames';
import ITask from '../../../../Types/Tasks/Task';
import MainModal, { MainModalProps } from '../../../Modules/Modal/MainModal';
import setObjectItem from '../../../../Helper/Object/setObjectItem';
import withTasks from '../../../../Context/Tasks/withTasks';
import hasError from '../../../../Helper/Error/hasError';
import { TaskActions } from '../../../../Context/Tasks/TasksStore';

/**
 * @interface Props
 */
interface Props extends MainModalProps {
    title: string;
    task: ITask;
    action: Partial<TaskActions>;
    closeTaskModal: () => void;
}

/**
 * @param {string} title
 * @param {ITask} task
 * @param {Pick<Props & {children?: React.ReactNode}, "isOpen" | "style" | "portalClassName" | "bodyOpenClassName" | "htmlOpenClassName" | "className" | "overlayClassName" | "appElement" | "onAfterOpen" | "onAfterClose" | "onRequestClose" | "closeTimeoutMS" | "ariaHideApp" | "shouldFocusAfterRender" | "shouldCloseOnOverlayClick" | "shouldCloseOnEsc" | "shouldReturnFocusAfterClose" | "parentSelector" | "aria" | "data" | "role" | "contentLabel" | "contentRef" | "overlayRef" | "testId" | "children">} props
 * @return {any}
 * @constructor
 */
const TaskModal: React.FC<Props> = withTasks(({ title, task, action, addTask, editTask, closeTaskModal, ...props }): any => {

    const [taskInfo, setTaskInfo] = useState(task);
    const [isError, setIsError] = useState(false);

    // Set modal Task if props Task was changed during opening modal window
    useEffect(() => {
        props.isOpen && setTaskInfo(task);

        return () => setIsError(false);
    }, [task, props.isOpen]);

    /**
     * @param {TaskActions} action
     * @param {ITask} newTask
     */
    const getTaskAction = (action: TaskActions, newTask: ITask) => {
        if (action === TaskActions.ADD_TASK) {
            addTask(newTask);
        }

        if (action === TaskActions.EDIT_TASK) {
            editTask(newTask)
        }
    };

    /**
     * @param {React.FormEvent<HTMLFontElement>} event
     * @param newTask
     */
    const onSubmit = (event: FormEvent<HTMLFormElement>, newTask: ITask): void => {
        event.preventDefault();
        if (hasError<ITask>(taskInfo)) {
            setIsError(true);
            return;
        }

        getTaskAction(action, newTask);

        setIsError(false);

        closeTaskModal();
    };

    return useMemo(() => (
        <MainModal
            {...props}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button
                        onClick={closeTaskModal}
                        type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form
                        onSubmit={(event) => onSubmit(event, taskInfo)}
                        className={classNames('', {
                            'was-validated': isError
                        })}
                        id="task-form"
                        noValidate={true}>
                        <div className="form-group">
                            <label htmlFor="task-name" className="col-form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="task-name"
                                placeholder="Enter Name"
                                value={taskInfo.name}
                                onChange={({ target }) => {
                                    setTaskInfo(setObjectItem(taskInfo, { name: target.value }))
                                }}
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
                                onChange={({ target }) => {
                                    setTaskInfo(setObjectItem(taskInfo, { description: target.value }))
                                }}
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
                        onClick={closeTaskModal}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        form="task-form"
                        className="btn btn-primary"
                    >
                        Save
                    </button>
                </div>
            </div>
        </MainModal>
    ), [props, title, isError]);
});

export default TaskModal;
