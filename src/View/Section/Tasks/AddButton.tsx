import React, { memo } from 'react';
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
            className={classNames('d-flex align-items-center btn btn-icon', [className])}
            aria-label={title}
            onClick={onClick}
        >
            <span>{title}</span>

            <svg className="img-icon ml-2" x="0px" y="0px" viewBox="0 0 52 52">
                <path d="M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M38.5,28H28v11c0,1.104-0.896,2-2,2
	s-2-0.896-2-2V28H13.5c-1.104,0-2-0.896-2-2s0.896-2,2-2H24V14c0-1.104,0.896-2,2-2s2,0.896,2,2v10h10.5c1.104,0,2,0.896,2,2
	S39.604,28,38.5,28z" />
            </svg>
        </button>
    );
};

export default memo(AddButton);
