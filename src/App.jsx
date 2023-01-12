import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { cppLanguage } from '@codemirror/lang-cpp';
import { atomone } from '@uiw/codemirror-theme-atomone'
import axios from 'axios';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Blogs from './Components/Blogs';
import FAQ from './Components/FAQ';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Blogs />
      <Footer />
    </>

  );
}
export default App;