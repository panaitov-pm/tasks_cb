import React from 'react';
import pluralization from '../../../Helper/Pluralization';

/**
 * @interface Props
 */
interface Props {
    count: number;
}

/**
 * @param {number} count
 * @return {any}
 * @constructor
 */
const TaskCount: React.FC<Props> = ({ count }): any => {
    return (count > 0) && (
        <>/{' '}{count}{' '}{pluralization(count, 'item|items')}</>
    );
};

export default TaskCount;
