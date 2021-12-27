import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';
import AuthProvider from './Component/Login/AuthProvider';
import PrivateRoute from './Component/Login/PrivateRoute';
import Header from './Component/Header';
import User from './Component/Crud/User';
import UpdateUser from './Component/Crud/UpdateUser';
import Adduser from './Component/Crud/Adduser';
import EmailUserupdate from './Component/Crud/EmailUserupdate';
import Appointement from './Component/Appointement/Appointement';
import AllDeshbord from './Component/Deshbord/AllDeshbord';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Appointement />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path='/appointement'>
              <Appointement></Appointement>
            </Route>
            <PrivateRoute path='/deshbord'>
              <AllDeshbord></AllDeshbord>
            </PrivateRoute>
       
            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/header">
              <Header />
            </PrivateRoute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/adduser">
              <Adduser />
            </Route>
            <Route path="/users/:id">
              <UpdateUser />
            </Route>
            <Route path="/emailusers/:emailId">
              <EmailUserupdate />
            </Route>













          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
