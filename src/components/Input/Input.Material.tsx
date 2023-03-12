

import React, { useState, useRef } from "react";

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon';
import classNames from 'classnames';
import { gsap, Power3 } from "gsap";

type InputSize = 'lg' | 'sm';

interface Props extends Omit<React.InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | React.ReactElement;
  append?: string | React.ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputM = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { disabled, size, icon, prepend, append, style, ...restProps } = props;
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const labelRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    setFocused(true);
    gsap.to(labelRef.current, {
      duration: 0.5,
      y: -20,
      fontSize: "12px",
      ease: Power3.easeOut,
    });
  };

  const handleBlur = () => {
    setFocused(false);
    if (!value) {
      gsap.to(labelRef.current, {
        duration: 0.5,
        y: 0,
        fontSize: "16px",
        ease: Power3.easeOut,
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (event.target.value) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  };

  const cnames = classNames('gapsi-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  });
  return (
    <div className={cnames} style={style}>
      {prepend && <div className="gapsi-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
      <div className="gapsi-input-label" ref={labelRef}>{props.placeholder}</div>
      <input
        type="text"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        style={{
          border: "none",
          borderBottom: "2px solid #ccc",
        }}
        {...restProps}
        ref={ref}
      />
      {append && <div className="gapsi-input-group-append">{append}</div>}
    </div>
  );
});

export default InputM