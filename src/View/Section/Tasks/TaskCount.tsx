import React from 'react';

/**
 * @interface Props
 */
interface Props {
    count: number;
}

const TaskCount: React.FC<Props> = ({ count }): any => {
    return (count > 0) && (
        <h3>Task list / {count} items</h3>
    );
};

export default TaskCount;
