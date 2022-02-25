import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';
import ProfileForm from './views/ProfileForm/ProfileForm';
import Confirmation from './views/Confirmation/Confirmation';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth isSigningUp />
          </Route>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute path="/profile/create">
            <ProfileForm isCreating />
          </PrivateRoute>
          <PrivateRoute path="/profile/edit">
            <ProfileForm isEditing />
          </PrivateRoute>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
