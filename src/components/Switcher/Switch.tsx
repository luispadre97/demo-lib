import { ReactNode, CSSProperties, useState, useEffect, FC } from 'react';
import classNames from 'classnames';

import './index.scss';

export interface switchProps {
    className?: string;
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    checkedChildren?: ReactNode;
    unCheckedChildren?: ReactNode;
    size?: 'small' | 'medium';
    children?: ReactNode;
    style?: CSSProperties;
}

export const Switch:FC<switchProps>= (props) => {
    const { className, disabled, defaultChecked, checked: pchecked, children, style,
        checkedChildren,
        unCheckedChildren,
        onChange,
        ...others } = props;

    const [checked, setChecked] = useState(defaultChecked || pchecked || false);

    useEffect(() => {
        if ('checked' in props) {
            setChecked(pchecked);
        }
    }, [pchecked])

    const handleClick = () => {
        if (!('checked' in props)) {
            setChecked(!checked);
        }

        onChange?.(!checked);
    }
    const cls = classNames({
        'gapsi-switch': true,
        'gapsi-switch-checked': checked,
        'gapsi-switch-disabled': disabled,
        [className as string]: !!className
    })

    return (<button
        {...others}
        type="button"
        role="switch"
        aria-checked="true"
        className={cls}
        onClick={handleClick}
        disabled={disabled}
    >
        <div className="gapsi-switch-handle"></div>
        <span className="gapsi-switch-inner">{
            checked ? checkedChildren : unCheckedChildren
        }</span>
    </button>)
}

// export default Switch;