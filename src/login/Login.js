import React, { useState } from "react";
import SignUp from "../signUp/SignUp";
import "./Login.css";

const Login = () => {
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="login">
      <div className="login__background">
        <img
          src="https://www.youtube.com/redirect?event=live_chat&redir_token=QUFFLUhqbTNib18tS2xVampSR20tT3A2eEVCWElsaUlTd3xBQ3Jtc0traElvd0ZHZzRHTG4yM082VlFHbzFPMl9ZSnZGNEpacll4Q0pWYWpnRHRiaEFKYnk5WVMzaGY4R1hIaE5VbTRyRU9PMTMwSWYzU1ZOVHdnenFVYk9aSDZMdnhmYVdEZFFuVUFrWENHd2N1VUI5cDdVMA&q=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F08%2FNetflix_2015_logo.svg%2F1200px-Netflix_2015_logo.svg.png"
          alt=""
          className="login__logo"
        />

        <button onClick={() => setSignUp(true)} className="login__button">
          SignIn
        </button>

        <div className="login__gradient" />

        <div className="login__body">
          {signUp ? (
            <SignUp />
          ) : (
            <>
              <h1>Unlimited films, TV programs and more.</h1>
              <h2>Watch anywhere. Cancel at any time</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>

              <div className="login__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignUp(true)}
                    className="login__getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
