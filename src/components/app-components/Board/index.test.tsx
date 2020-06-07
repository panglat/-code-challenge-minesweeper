import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';
import Board from '.';

test('can render with redux with defaults', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Board />
    </Provider>
  );
});
