import React from "react";
import Layout from "./components/Layout";
import TeamsBuilder from "./containers/TeamsBuilder";

function App() {
  return (
    <div className="App">
      <Layout>
        <TeamsBuilder />
      </Layout>
    </div>
  );
}

export default App;
