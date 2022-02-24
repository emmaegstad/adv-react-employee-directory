import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Login from './views/Auth/Login/Login';
import Register from './views/Auth/Register/Register';
import Profile from './views/Profile/Profile';
import CreateProfile from './components/CreateProfile/CreateProfile';
import EditProfile from './components/EditProfile/EditProfile';

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
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/profile/create">
            <CreateProfile />
          </Route>
          <Route path="/profile/edit">
            <EditProfile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
