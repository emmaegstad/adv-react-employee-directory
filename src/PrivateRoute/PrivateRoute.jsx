import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();

  return (
    <Route
      {...routeProps}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
