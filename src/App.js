import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import TeamsBuilder from "./containers/TeamsBuilder";
import Profile from "./components/Profile/Profile";
import Coutnerparts from "./components/Counterparts/Counterparts";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={TeamsBuilder} />
        <Route path="/profile" component={Profile} />
        <Route path="/counterparts" component={Coutnerparts} />
      </Layout>
    </div>
  );
}

export default App;
