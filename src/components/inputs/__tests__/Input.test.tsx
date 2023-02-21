import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CustomInput, { CustomInputProps } from '../CustomInput';

describe('CustomInput', () => {
  const mockSubmit = jest.fn();

  const defaultProps: CustomInputProps = {
    label: 'Test Label',
    placeholder: 'Test Placeholder',
    onSubmit: mockSubmit,
    handleFocus: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component with correct label and placeholder text', () => {
    render(<CustomInput {...defaultProps} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  it('should call the onSubmit function when form is submitted with a valid input value', () => {
    render(<CustomInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('Test Placeholder');
    const submitButton = screen.getByText('Submit');
    fireEvent.change(input, { target: { value: 'Test Input' } });
    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });

  it('should not call the onSubmit function when form is submitted with an empty input value', () => {
    render(<CustomInput {...defaultProps} />);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it('should display an error message when errorMessage prop is passed', () => {
    render(<CustomInput {...defaultProps} errorMessage="Test Error Message" />);
    expect(screen.getByText('Test Error Message')).toBeInTheDocument();
  });
});
