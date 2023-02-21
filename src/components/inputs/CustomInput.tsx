import React, { FC, useState } from 'react';
import { ICourse } from './helpers/course.interface';
import CustomButton from '../buttons/CustomButton';
import Course from './helpers/course';
import './styles/CustomInput.css';

export interface CustomInputProps {
    label: string;
    placeholder: string;
    onSubmit: (val:ICourse) => void;
    handleFocus: ()=> void;
    errorMessage?: string;
}

const CustomInput:FC<CustomInputProps>=(props)=> {
    const { label, placeholder, onSubmit, handleFocus, errorMessage } = props;
    const [value, setValue] = useState('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = new Course(value);
        onSubmit(result);
    };
  
    const inputClass = errorMessage
      ? 'custom-input__input custom-input__input--error'
      : 'custom-input__input';

  return (
    <form className="custom-input" onSubmit={handleSubmit}>
      <label htmlFor="search-box" className="custom-input__label">{label}</label>
      <div className="custom-input__segment">
        <input
            name="search-box"
            aria-label={label}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={inputClass}
            onFocus={handleFocus}
        />
        <CustomButton label="Submit" disabled={!value} />
      </div>
      {errorMessage && <span className="custom-input__error-message">{errorMessage}</span>}
    </form>
  );
}

export default CustomInput;