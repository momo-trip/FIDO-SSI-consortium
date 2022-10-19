import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { Home } from './components/pages/Home';
import { Page2 } from './components/pages/Page2';
import { Holder1 } from './components/pages/Holder1';
import { Page4 } from './components/pages/Page4';
import { Page5 } from './components/pages/Page5';
import { Holder2 } from './components/pages/Holder2';
import { Layout } from './components/layout/Layout';

import { Holder_home } from './components/pages/Holder_home';
import { Issuer_home } from './components/pages/Issuer_home';


function App() {
  return (
      <div className="App">
        <h1>VC Issuance</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="holder1" element={<Holder1 />} />
          <Route path="page4" element={<Page4 />} />
          <Route path="page5" element={<Page5 />} />
          <Route path="holder2" element={<Holder2 />} />
          <Route path="issuer_home" element={<Issuer_home />} />
          <Route path="holder_home" element={<Holder_home />} />
        </Routes>
      </div>
  );
}

export default App;
