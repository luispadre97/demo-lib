import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Button = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = d3.select(buttonRef.current);

    button.transition()
      .duration(1000)
      .ease(d3.easeBounce)
      .style('transform', 'translateX(100px)');
  }, []);

  return <button ref={buttonRef}>Click Me</button>;
};

export default Button;
