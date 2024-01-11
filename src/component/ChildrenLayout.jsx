// DefaultLayout.js
import React from 'react';
import NavBar from './navBar';
import Footer from './footer';

const ChildrenLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default ChildrenLayout;
