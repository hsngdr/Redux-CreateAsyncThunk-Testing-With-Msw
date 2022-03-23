import React from 'react';
import { render as rtlRender, screen,waitFor } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import store from './store/index'

const render = () =>
  rtlRender(
      <Provider store={store}><App/></Provider>
  );

beforeEach(() =>render());

test('renders learn react link',async () => {
   await waitFor(()=>expect(screen.getByText(/success/i)).toBeInTheDocument())
});
test('api fetch',async () => {
  await waitFor(()=>expect(screen.getByTestId("email")).toHaveTextContent("emil.halla@example.com"))
});