import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Form from '../components/form/index.js';
describe('Testing Form component', () => {
  it('Should use callback on submit', () => {

    let callback = jest.fn();

    render( <Form setRequestParams={callback}/> );

    let button = screen.getByRole('button');

    fireEvent.click(button);
    expect(callback).toHaveBeenCalled();
  });
});