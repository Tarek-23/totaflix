import React, { useState } from "react";
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__overlay">
        <h1 className="loginScreen__logo">Totaflix</h1>
        <button className="loginScreen__signIn">Sign In</button>
        <div className="loginScreen__content">
          <div className="loginScreen__text">
            <h1>Unlimited movies, TV Shows, and more.</h1>
            <h2>Watch anywhere. Cancel Anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </div>
          <form>
            <div className="loginScreen__input">
              <input type="email" placeholder="TotaIsAwesome2021@example.com" />
              <button type="submit">Get Started</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
