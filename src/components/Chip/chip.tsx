// import { FC } from 'react'
// import classNames from 'classnames'

// export type StatusType = 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'info'

// export interface ChipProps {
//   className?: string;
//   isLowContrast?: boolean;
//   status?: StatusType;
//   text: string;
// }


// export const Chip: FC<ChipProps> = (props) => {
//   const { className, text, status, ...restProps } = props
//   const classes = classNames('chip', className, {
//     [`chip-${status}`]: status,
//   })
//   return (
//     <div className={classes} {...restProps}>
//       {text}
//     </div>
//   )
// }

import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { gsap } from 'gsap';

export type StatusType = 'primary' | 'default' | 'success' | 'warning' | 'danger' | 'info';

export interface ChipProps {
  className?: string;
  isLowContrast?: boolean;
  status?: StatusType;
  text: string;
}

export const Chip: FC<ChipProps> = (props) => {
  const { className, text, status, ...restProps } = props;
  const classes = classNames('chip', className, {
    [`chip-${status}`]: status,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        duration: 0.5,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        x: isVisible ? 0 : 50,
        ease: 'power3.out',
        onComplete: () => setIsVisible(true),
      });
    }
  }, [isVisible, ref]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(ref.current, {
      duration: 0.3,
      scale: 1.1,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(ref.current, {
      duration: 0.3,
      scale: 1,
      ease: 'power3.out',
    });
  };

  return (
    <div
      ref={ref}
      className={classes}
      {...restProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </div>
  );
};