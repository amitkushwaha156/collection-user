import React from 'react';
import { render } from '@testing-library/react';
import FormMoal from './component/FormMoal'

test('renders FormMoal component', () => {
  const { getByText } = render(<FormMoal/>);
  const tableElement = getByText(/Submit/);
  expect(tableElement).toBeInTheDocument();
});