import React from 'react';

import GloablStyles from './styles/Global';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>

      <GloablStyles />
    </>
  );
}

export default App;
