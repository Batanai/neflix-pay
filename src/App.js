import React, { useEffect } from "react";
import "./App.css";
import Home from "./home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./profile/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubcribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
