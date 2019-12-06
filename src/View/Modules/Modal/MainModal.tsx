import React, { memo } from 'react';
import ReactModal from 'react-modal';

import '../../../scss/modules/modal.scss'

/**
 * @interface MainModalProps
 */
export interface MainModalProps extends ReactModal.Props {

}

/**
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined} children
 * @param {Pick<MainModalProps & {children?: React.ReactNode}, "isOpen" | "style" | "portalClassName" | "bodyOpenClassName" | "htmlOpenClassName" | "className" | "overlayClassName" | "appElement" | "onAfterOpen" | "onAfterClose" | "onRequestClose" | "closeTimeoutMS" | "ariaHideApp" | "shouldFocusAfterRender" | "shouldCloseOnOverlayClick" | "shouldCloseOnEsc" | "shouldReturnFocusAfterClose" | "parentSelector" | "aria" | "data" | "role" | "contentLabel" | "contentRef" | "overlayRef" | "testId">} props
 * @return {any}
 * @constructor
 */
const MainModal: React.FC<MainModalProps> = ({ children, ...props }) => (
    <ReactModal
        ariaHideApp={false}
        overlayClassName="modal show"
        className="modal-dialog"
        bodyOpenClassName="modal-open"
        closeTimeoutMS={500}
        {...props}
    >
        {children}
    </ReactModal>
);

export default memo(MainModal);
