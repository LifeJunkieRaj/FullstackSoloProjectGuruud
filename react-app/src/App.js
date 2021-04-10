import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage"

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // const func = async() => {
      // const user = await dispatch(authenticate());
      dispatch(authenticate()).then(()=> {
        setLoaded(true);
        setAuthenticated(true)
      });
      // if (!user.errors) {
        //   setAuthenticated(true);
        // }
      // setLoaded(true);
    // };
    // func();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar
        authenticated={authenticated} 
        setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/" exact={true} authenticated={authenticated}>
          <LandingPage authenticated={authenticated} />
        </Route>
        {/* <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute> */}
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
          <HomePage authenticated={authenticated}/>
        </ProtectedRoute> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
