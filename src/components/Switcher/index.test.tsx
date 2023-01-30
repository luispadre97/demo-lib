import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Switch from './index';

describe('Switch', () => {
/**
  test('renders normal Switch', () => {
    const { container } = render(<Switch>click me</Switch>);
  
    expect(container.querySelector('.gapsi-btn-normal')).toBeInTheDocument();
  });

  test('renders small Switch', () => {
    const { container } = render(<Switch size="small">click me</Switch>);
  
    expect(container.querySelector('.gapsi-btn-small')).toBeInTheDocument();
  });

  test('should support click', () => {
    const onClick = jest.fn();
    render(<Switch type="primary" onClick={onClick}>click me</Switch>);

    const linkElement = screen.getByText(/click me/i);
    fireEvent.click(linkElement);

    expect(onClick).toBeCalled();
  });
  **/
 test('should support under control', () => {
  const onChange = jest.fn();
  render(<Switch checked data-testid="t2" onChange={onChange} />);

  const linkElement = screen.getByTestId('t2');
  expect(linkElement.getAttribute('class')).toBe('gapsi-switch gapsi-switch-checked');

  fireEvent.click(linkElement, {});
  expect(onChange).toBeCalledTimes(1);
  expect(linkElement.getAttribute('class')).toBe('gapsi-switch gapsi-switch-checked');
});
});

