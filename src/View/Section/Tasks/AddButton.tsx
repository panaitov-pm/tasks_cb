import * as React from 'react';
import { memo } from 'react';
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

const AddButton: React.FC<Props> = ({ title, onClick, className }): any => {
    return (
        <button
            type="button"
            className={classNames('d-flex align-items-center btn', [className])}
            aria-label={title}
            onClick={onClick}
        >
            <span>{title}</span>
            <ImgIcon
                className="img-icon ml-2"
                src="/icons/plus.png"
                alt={title}
            />
        </button>
    );
};

export default memo(AddButton);
