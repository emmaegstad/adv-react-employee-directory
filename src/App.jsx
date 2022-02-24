import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import Profile from './views/Profile/Profile';

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
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route path="/profile/:id/create">
            <Profile isCreating />
          </Route>
          <Route path="/profile/:id/edit">
            <Profile isEditing />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
