import React from "react";
import { Button } from "react-bootstrap";
import App from "../App";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";

function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
}
const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="/images/JB_Logo.jpg" alt="Logo" className="hero-img" />
      <Button className="render-app-button" onClick={renderApp}>
        Enter
      </Button>
    </div>
  );
};

export default LandingPage;
