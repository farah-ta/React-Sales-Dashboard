import React from 'react';
import { personSales } from '../Data/personsales';
import Table from 'react-bootstrap/Table';

function Members() {
    return (
        <div className='col-md-10'>
        <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Sales</th>
                </tr>
              </thead>
        
              <tbody>
              {personSales.map((item,index)=> 
                    <tr  key={index}>
              <td>{item.num}</td>
          
           
                  <td>{item.name}</td>
                  <td> {item.sales} </td>
                </tr>  )}
                </tbody>
               
        </Table>
        
                </div>
                
                
    );
};

export default Members;