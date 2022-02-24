import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/profile/create">
            <ProfileForm isCreating />
          </Route>
          <Route path="/profile/edit">
            <ProfileForm isEditing />
          </Route>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
