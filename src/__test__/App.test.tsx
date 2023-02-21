import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { ICourse } from '../components/inputs/helpers/course.interface';

describe('App component', () => {
  it('renders CustomInput and Card components', () => {
    render(<App />);

    expect(screen.getByLabelText('Course')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Text')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.queryByText(/Department/)).toBeNull();
  });

  it('displays the course card when a valid course is submitted', async () => {
    const mockCourse: ICourse = {
      courseString: 'CSC101 F21',
      details: {
        department: 'CSC',
        courseNumber: 101,
        year: 2021,
        semester: 'Fall'
      },
      isValid: true,
      errorMsg: ''
    };

    render(<App />);
    const input = screen.getByLabelText('Course') as HTMLInputElement;

    fireEvent.change(input, { target: { value: mockCourse.courseString } });
    fireEvent.click(screen.getByText('Submit'));

    expect(await screen.findByText(/Department/)).toBeInTheDocument();
    expect(screen.queryByText('Enter Text')).toBeNull();
  });

  it('displays an error message when an invalid course is submitted', async () => {
    const mockCourse: ICourse = {
      courseString: 'CSC101F21',
      details: undefined,
      isValid: false,
      errorMsg: 'Error: Could not parse course'
    };

    render(<App />);
    const input = screen.getByLabelText('Course') as HTMLInputElement;

    fireEvent.change(input, { target: { value: mockCourse.courseString } });
    fireEvent.click(screen.getByText('Submit'));

    expect(await screen.findByText(mockCourse.errorMsg)).toBeInTheDocument();
    expect(screen.queryByText('Department')).toBeNull();
  });
});
