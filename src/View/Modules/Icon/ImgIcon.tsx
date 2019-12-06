import * as React from 'react';
import { memo } from 'react';
import classNames from 'classnames';

/**
 * @interface Props
 */
interface Props {
    src: string;
    alt: string;
    className?: string;
}

const ImgIcon: React.FC<Props> = ({ src, alt, className }) => {
    return (
        <img
            className={classNames('img-icon', [className])}
            src={src}
            alt={alt} />
    );
};

export default memo(ImgIcon);
