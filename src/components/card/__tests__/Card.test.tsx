import React from 'react';
import { render } from '@testing-library/react';
import Card, { CardProps } from '../Card';

describe('Card', () => {
  const defaultProps: CardProps = {
    department: 'Computer Science',
    courseNumber: 101,
    year: 2022,
    semester: 'Spring',
  };
  
  it('should match snapshot', () => {
    const { container } = render(<Card {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
