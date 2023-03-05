import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/dashboard.css';
import { countrySales } from '../Data/countrysales';
import { personSales } from '../Data/personsales';
import {GlobeEuropeAfrica} from 'react-bootstrap-icons';
import {BarChartLineFill} from 'react-bootstrap-icons';
import {PersonFill} from 'react-bootstrap-icons';
import {BarChartFill} from 'react-bootstrap-icons';
import { RadarChart, Radar, PolarRadiusAxis,PolarAngleAxis,PolarGrid,  ResponsiveContainer } from 'recharts';
import { BarChart, Tooltip, Bar, Legend, Line,CartesianGrid, XAxis, YAxis } from 'recharts';
function Dashboard() {
    let countryTotal= countrySales.reduce(function(prev,current)
    {
        return prev+ +current.sales;}, 0);

        const countries=countrySales.length;

        let personTotal = personSales.reduce(function(prev,current)
      {  return prev+ +current.sales;}, 0);

const members=personSales.length;


    return (
        <div className='wrapper'>

<div className='row'>

<div className="col-md-3 #text-white" d-flex px-1 py-3 rounded>
<div className='box'>
<div className='row'>
<div className="col-md-7">
        <p>Country Sales</p>
        <h2>{countryTotal}</h2>
        </div> 
        <div className="col-md-3">
        <div class="icon text-warning">
         <BarChartFill size={56}/> </div>
         </div> </div>


   
</div>
</div>
<div className="col-md-3 #text-white" d-flex px-1 py-3 rounded>
    <div className="box">
    <div className='row'> 
    <div className="col-md-7">
    <p>Countries</p> 
    <h2>{countries}</h2>
    </div>

     <div className="col-md-3"> 
     <div class="icon text-success">
     <GlobeEuropeAfrica size={56}/> </div></div>
   
   

   </div>
 
    </div>
       
     </div>
     <div className="col-md-3 #text-white" d-flex px-1 py-3 rounded>
     <div className="box">
     <div className='row'> 
     <div className="col-md-7"> 
     <p>Person Sales</p> 
     <h2>{personTotal}</h2>
     </div>
     <div className="col-md-5"> 
     <div class="icon text-danger">

     <BarChartLineFill size={56}/> 
     </div>
     
     </div>

     </div>
    
    
   
  

     
     </div>
        
      </div>
      <div className="col-md-3 #text-white" d-flex px-1 py-3 rounded>
      <div className="box">
      <div className='row'> 
      <div className="col-md-7"> 
      <p>Team Members</p> 
      <h2>{members}</h2>
      </div>
      <div className="col-md-3"> 
      <div class="icon text-primary"> 
      <PersonFill size={56}/> 
      </div></div>
     </div>   </div></div>
      
    

</div>


<div className='row'>
<div className="col-md-7">
    <div className="box">
    <div className="chart">
    <h3 className="chart-heading">Country Sales</h3>
    <ResponsiveContainer width="100%"  aspect={1}>
    <BarChart width={730} height={250} data={personSales}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="sales" fill="#8884d8" />
  <Bar dataKey="name" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>




<div className="col-md-4">
      <div className="box">
      <div className="chartpie">
      <h3>Sales by Person</h3>
      <ResponsiveContainer width="100%"  aspect={1}>
      <RadarChart outerRadius={90} width={730} height={250} data={personSales}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="name" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Lily" dataKey="sales" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>

      </ResponsiveContainer>
      </div>
      </div></div>




</div>



        </div>
      
        
    );
}

export default Dashboard;
