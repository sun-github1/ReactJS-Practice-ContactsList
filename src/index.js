import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layouts/Header';
import Content from './Content';
import Footer from './Components/Layouts/Footer';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Header/>
<Content/>
<Footer/>
</>
    

);
  