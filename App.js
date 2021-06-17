import React from 'react';
import Navbar from './Component/Navbar';
import Content from './Component/Content';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <div className="m-0 pb-100">
        <Navbar />
        <Content />
      </div>
    </>
  );
}

export default App;
