import * as React from 'react';
import { memo } from 'react';

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
            className={className}
            src={src}
            alt={alt} />
    );
};

export default memo(ImgIcon);
