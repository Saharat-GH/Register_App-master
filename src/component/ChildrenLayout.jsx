// DefaultLayout.js
import React from 'react';
import NavBar from './์NavBar';
import Footer from './Footer';

const ChildrenLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    {/* <Footer /> */}
  </div>
);

export default ChildrenLayout;
