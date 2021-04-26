import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { Props } from './interface';
import * as ModalContants from './constants';

const defaultProps = {
  needAnimation: ModalContants.DEFAULT_NEED_ANIMATION,
  closeTimeoutMS: ModalContants.DEFAULT_CLOSE_TIMEOUT_MS,
  shouldCloseOnMaskClick: ModalContants.DEFAULT_SHOULD_CLOSE_ON_MASK_CLICK,
};

const Modal: React.FC<Props> = userProps => {
  const {
    visible: propsVisible,
    needAnimation,
    onClose,
    closeTimeoutMS,
    afterClose,
    style,
    className,
    hiddenClassName,
    animationClassName,
    maskStyle,
    maskClassName,
    maskHiddenClassName,
    maskAnimationClassName,
    shouldCloseOnMaskClick,
    children,
  } = { ...defaultProps, ...userProps };

  const [visible, setVisible] = useState<boolean>(false);
  const [animationFlag, setAnimationFlag] = useState<boolean>(false);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    if (!needAnimation) {
      setVisible(propsVisible);

      if (!propsVisible && afterClose) {
        afterClose();
      }
    } else if (propsVisible) {
      setVisible(true);
    } else if (animationFlag) {
      setAnimationFlag(false);
      setTimeout(() => {
        setVisible(false);
        if (afterClose) {
          afterClose();
        }
      }, closeTimeoutMS);
    }
  }, [propsVisible]);

  useEffect(() => {
    if (needAnimation && visible) {
      setTimeout(() => setAnimationFlag(true), 20);
    }
  }, [visible]);

  return visible ? (
    <div
      className={classnames(
        'lm-modal-mask',
        needAnimation ? maskAnimationClassName || 'lm-modal-mask-animation' : '',
        needAnimation ? (animationFlag ? '' : maskHiddenClassName || 'lm-modal-mask-hidden') : '',
        maskClassName || '',
      )}
      style={maskStyle}
      onClick={shouldCloseOnMaskClick && onClose ? closeModal : undefined}
    >
      <div
        className={classnames(
          'lm-modal-content',
          needAnimation ? animationClassName || 'lm-modal-content-animation' : '',
          needAnimation ? (animationFlag ? '' : hiddenClassName || 'lm-modal-content-hidden') : '',
          className || '',
        )}
        style={style}
      >
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
