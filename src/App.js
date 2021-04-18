import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleFontLoader from 'react-google-font-loader';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Admin from './Components/Admin/Admin/Admin';
import Service from './Components/Home/Service/Service';
import Orders from './Components/Orders/Orders/Orders';
import Login from './Components/Login/Login';
import Book from './Components/Orders/Book/Book';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  <GoogleFontLoader
    fonts={[
      {
        font: 'Roboto',
        weights: [400, '400i', 700],
      },
      {
        font: 'Courgette',
        weights: [400],
      },
      {
        font: 'Roboto Mono',
        weights: [400, 700],
      },
    ]}
    subsets={['cyrillic-ext', 'greek']}
  />
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="header-nav">
        <Router>
          <div className="header-wrapper">
            <div className="header-title">
              <h4>My <span>Gym</span>spiration</h4>
            </div>
            <nav className="header-menu">
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                {!loggedInUser ?
                  <li>
                    <Link className="login" to="/login">Login</Link>
                  </li>
                  :
                  <li ><Link to="/login" style={{ color: '#DD5552' }}>{loggedInUser.email}</Link></li>
                }
              </ul>
            </nav>
          </div>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/service">
              <Service></Service>
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/book/:serviceId">
              <Book></Book>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
