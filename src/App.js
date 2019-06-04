import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout";
import TeamsBuilder from "./containers/TeamsBuilder";

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={TeamsBuilder} />
        <Route
          path="/profile"
          render={() => <h3>profile page placeholder</h3>}
        />
      </Layout>
    </div>
  );
}

export default App;
