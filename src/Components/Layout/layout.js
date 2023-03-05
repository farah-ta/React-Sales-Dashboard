import React from 'react';
import Sidebar from '../sidebar';
import Topnavbar from '../Topnavbar';
import Router from '../../Routes/Router';
import Footer from '../footer'; 

function Layout() {
    return (
        <div className="layout">
      <Sidebar />
      <div className="mainlayout">
      <Topnavbar />

        <div className="content">
          <Router />
          
        </div>
        <Footer/>
      </div>
    </div>
    );
};

export default Layout;



