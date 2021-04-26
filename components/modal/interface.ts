import { ReactNode, CSSProperties } from 'react';

export interface Props {
  visible: boolean;
  needAnimation?: boolean;
  onClose?: () => void;
  closeTimeoutMS?: number;
  afterClose?: () => void;
  style?: CSSProperties;
  className?: string;
  hiddenClassName?: string;
  animationClassName?: string;
  maskStyle?: CSSProperties;
  maskClassName?: string;
  maskHiddenClassName?: string;
  maskAnimationClassName?: string;
  shouldCloseOnMaskClick?: boolean;
  children?: ReactNode;
}
