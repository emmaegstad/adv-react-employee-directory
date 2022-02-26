import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';
import { MemoryRouter } from 'react-router-dom';

test('should display user info upon sign in', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const headerTitle = screen.getByRole('heading', {
    name: /Acme Employee Directory/i,
  });
  expect(headerTitle).toBeInTheDocument();

  const userStatus = screen.getByText(/not signed in/i);
  expect(userStatus).toBeInTheDocument();

  const logInButton = screen.getByRole('button', { name: /log in/i });
  expect(logInButton).toBeInTheDocument();

  const homeTitle = screen.getByRole('button', { name: /log in/i });
  expect(homeTitle).toBeInTheDocument();

  const createLink = screen.getByRole('button', { name: /log in/i });
  expect(createLink).toBeInTheDocument();

  const signLink = screen.getByRole('link', { name: /sign in/i });
  expect(signLink).toBeInTheDocument();

  userEvent.click(logInButton);

  const logInTitle = screen.getByRole('heading', {
    name: /welcome back! please log in\./i,
  });
  expect(logInTitle).toBeInTheDocument();

  const emailInput = screen.getByRole('textbox', { name: /e\-mail:/i });
  expect(emailInput).toBeInTheDocument();

  userEvent.type(emailInput, 'emma@egstad.com');

  const passInput = screen.getByLabelText(/password:/i);
  expect(passInput).toBeInTheDocument();

  userEvent.type(passInput, '12345678');

  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(submitButton).toBeInTheDocument();

  userEvent.click(submitButton);

  const newUserStatus = await screen.findByText(
    /signed\-in as emma@egstad\.com/i
  );
  expect(newUserStatus).toBeInTheDocument();

  const logOutButton = screen.getByRole('button', { name: /log out/i });
  expect(logOutButton).toBeInTheDocument();

  userEvent.click(logOutButton);
});

test.skip('should display create profile form upon clicking create account link', async () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </MemoryRouter>
  );

  const createLink = screen.getByRole('link', { name: /create account/i });
  expect(createLink).toBeInTheDocument();

  userEvent.click(createLink);

  const createTitle = screen.getByRole('heading', {
    name: /hello! please create an account\./i,
  });
  expect(createTitle).toBeInTheDocument();

  const emailInput = screen.getByRole('textbox', { name: /e\-mail:/i });
  userEvent.type(emailInput, 'emma+6@egstad.com');

  const passInput = screen.getByLabelText(/password:/i);
  userEvent.type(passInput, '12345678');

  const createSubmit = screen.getByRole('button', { name: /submit/i });
  expect(createSubmit).toBeInTheDocument();
  userEvent.click(createSubmit);
  screen.debug();

  const successMsg = await screen.findByRole('heading', {
    name: /registration successful!/i,
  });
  expect(successMsg).toBeInTheDocument();
});
