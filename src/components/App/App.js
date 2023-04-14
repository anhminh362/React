
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import React, {Component} from 'react';
import Content from '../Content/Content';

function App() {
  return (
    <div id="container">
    <Header />
    {/* this is content area */}
    <Content/>
    {/* footer content */}
    <Footer/>
</div>

  );
}

export default App;
