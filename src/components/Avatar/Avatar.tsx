import React, { ReactNode, CSSProperties, useRef, useState } from 'react';
import classNames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';

import './index.scss';

export interface avatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
  src?: string | ReactNode;
  className?: string;
  icon?: React.ReactNode;
  gap?: number;
  children?: ReactNode;
  style?: CSSProperties;
}

const Avatar = (props: avatarProps) => {
  const {
    size = 'medium',
    shape = 'circle',
    src,
    icon,
    gap,
    children,
    ...others
  } = props;

  const [scale, setScale] = useState(1);
  const wraperRef = useRef(null)

  const textRefCallback = React.useCallback( (node:any) => {
    if(!node) return;
    const reRender = () => {
      const wraperNode:any = wraperRef.current;
      if (!node || !wraperNode) {
        return;
      }
      const wraperWidth = wraperNode.offsetWidth;
      const textWidth = node.offsetWidth;
      const gap = 4;

      const scale = wraperWidth - gap * 2 < textWidth ?
        (wraperWidth - gap * 2) / textWidth : 1;
      setScale(scale);
    }

    const ob = new ResizeObserver(reRender);
    ob.observe(node);

  }, [])

  const cls = classNames({
    'gapsi-avatar': true,
    'gapsi-avatar-lg': size === 'large',
    'gapsi-avatar-sm': size === 'small',
    'gapsi-avatar-icon': icon,
    'gapsi-avatar-image': src,
    [`gapsi-avatar-${shape}`]: shape,
  });

  const style = typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: `${size}px`,
    fontSize: size / 2,
  } : props.style;

  const textStyle = {
    lineHeight: `${size}px`,
    transform: `scale(${scale}) translateX(-50%)`
  }

  return (
    <span
      className={cls}
      {...others}
      style={style}
      ref={wraperRef}
    >
      {icon ? icon : null}
      {src ? (typeof src === 'string' ? <img src={src} /> : src) : null}
      {children ? (typeof children === 'string' ? <span
        style={textStyle}
        ref={textRefCallback}
        className="gapsi-avatar-string">{children}</span> : children) : null}
    </span>
  );
}

export default Avatar;