import React from 'react';
import Layout from './components/Layout';
import TeamsBuidler from './containers/TeamsBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <TeamsBuidler />
      </Layout>
    </div>
  );
}

export default App;
