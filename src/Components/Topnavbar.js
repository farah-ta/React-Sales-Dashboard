import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn, MDBInputGroup, MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem, MDBNavbarItem
  } from 'mdb-react-ui-kit';
  import '../Styles/topnavbar.css';
  import {Bell, Envelope} from 'react-bootstrap-icons';

function Topnavbar() {
   

    return (
        <div className="topnavbar">
        <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
       
      <div className='searchbox'>
        <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>
            </div>
            <div className='rside'>
            <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                 <Bell/>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                 
                 
                </MDBDropdown>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                 <Envelope/>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
                </div>
               
                
                </MDBContainer>
    </MDBNavbar>
     
      
    </div>

    
       
    );
};

export default Topnavbar;
