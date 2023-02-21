import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomButton, { CustomButtonProps } from '../CustomButton';

describe('CustomButton', () => {
  const defaultProps: CustomButtonProps = {
    label: 'Test Label',
    disabled: false,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the button with the correct label', () => {
    render(<CustomButton {...defaultProps} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<CustomButton {...defaultProps} disabled={true} />);
    expect(screen.getByText('Test Label')).toBeDisabled();
  });
});
