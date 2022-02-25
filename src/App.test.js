import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext';
import { MemoryRouter } from 'react-router-dom';

test('should display something', () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <ProfileProvider>
          <App />
        </ProfileProvider>
      </UserProvider>
    </MemoryRouter>
  );

  const homeTitle = screen.getByRole('heading', {
    name: /Acme Employee Directory/i,
  });
  expect(homeTitle).toBeInTheDocument();
});
