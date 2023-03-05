import React from 'react';
import {countrySales} from '../Data/countrysales';
import Table from 'react-bootstrap/Table';

function Sales() {
    return (
        <div>
<h1>Sales</h1>
<div className='col-md-10'>
<Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Country</th>
          <th>Sales</th>
        </tr>
      </thead>

      <tbody>
      {countrySales.map((item,index)=> 
            <tr  key={index}>
      <td>{item.num}</td>
  
   
          <td>{item.country}</td>
          <td> {item.sales} </td>
        </tr>  )}
        </tbody>
       
</Table>

        </div>
        
        </div>
    );
}

export default Sales;
