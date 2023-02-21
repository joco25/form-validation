import React from 'react';
import "./styles/CustomButton.css"

export interface CustomButtonProps {
  label: string;
  disabled?: boolean;
}

function CustomButton(props: CustomButtonProps) {
  const { label, disabled } = props;

  return (
    <button className="custom-button" disabled={disabled}>
      {label}
    </button>
  );
}

export default CustomButton;