import React, { memo } from 'react';
import ImgIcon from '../../Modules/Icon/ImgIcon';
import classNames from 'classnames';

/**
 * @interface Props
 */
interface Props {
    title: string;
    onClick: () => void;
    className?: string;
}

const RemoveButton: React.FC<Props> = ({ title, onClick, className }): any => {
    return (
        <button
            type="button"
            className={classNames('d-inline-flex align-items-center btn btn-icon p-0', [className])}
            aria-label={title}
            onClick={onClick}
        >
            <ImgIcon
                src="/icons/remove.png"
                alt={title}
            />
        </button>
    );
};

export default memo(RemoveButton);
