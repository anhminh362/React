
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import React, {Component} from 'react';
import Content from '../Content/Content';
import JustAnotherCounter from '../Hooks/JustAnotherCounter';
import FavoriteColor from '../Hooks/vidu3';
import LoginForm from '../Hooks/LoginForm';
import Car from '../Hooks/bai4';

function App() {
  return (
    <div id="container">
    <Header />
    {/* this is content area */}
    {/* <Content/> */}
    <JustAnotherCounter></JustAnotherCounter>
    <FavoriteColor></FavoriteColor>
    {/* <LoginForm></LoginForm> */}
    <Car></Car>
    {/* footer content */}
    <Footer/>
</div>

  );
}

export default App;
