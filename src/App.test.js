import { render, screen, fireEvent } from '@testing-library/react';
import Calculate from './Pages/Calculate';

test('calculates the BMI', () => {
  render(<Calculate />);
  fireEvent.change(screen.getByPlaceholderText('Enter your weight'), { target: { value: '70' } });
  fireEvent.change(screen.getByPlaceholderText('Enter your height'), { target: { value: '175' } });
  fireEvent.click(screen.getByText('Calculate'));
  expect(screen.getByText('Your BMI is 22.9')).toBeInTheDocument();
  expect(screen.getByText('Normal weight')).toBeInTheDocument();
});
