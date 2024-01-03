import React from 'react';
import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Banner />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/portfolio',
      element: <Portfolio />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]);

  return (
    <>
      <Header />
      {appRouter}
      <Footer />
    </>
  );
};

export default Body;
