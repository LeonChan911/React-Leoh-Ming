import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../index';

describe('Modal', () => {
  test('should render default', () => {
    const { container } = render(<Modal />);
    expect(container).toMatchSnapshot();
  });
});
