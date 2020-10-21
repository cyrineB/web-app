
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import CanvasJSReact from './canvasjs.react';
import Table from 'react-bootstrap/Table'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints =[];



export default class Mycomponent extends React.Component  {
state = {
    name  : '',
    type: '',
    id  : '',
    response : [],
    test : false ,
    value : '',
   
   

};
componentDidMount() {
    this.callApi()
        .then(res => {
            this.setState({
                response: Object.keys(res).map(key=>({...res[key], id:key}))
            })
        })
        .catch(err => console.log(err));
}


callApi = async () => {
    const response = await fetch(`/users`);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
    
};
//select option to choose the product name to visualize 
renderProduct(){
    return(
        <select  className ="custom-select" value={this.state.value} onChange={ this.handleChange} >
             <option >Select a product </option>
            <option value ="Mouse">{this.state.response.map(item => (item.name))[0]}</option>
            <option value="Dress">{this.state.response.map(item => (item.name))[1]}</option>
             <option value="Phone">{this.state.response.map(item => (item.name))[2]}</option>
  </select>
   
   )

}
handleEvent = () => {
    console.log('hello');
    this.setState  ({test : true })
    };
    handleEventTable = () => {
       
        this.setState  ({testTable : true })  };
handleChange = (event) => {
  
    
    this.setState({  value : event.target.value  });
    //var optionValue = JSON.stringify( event.target.value)
};

// this function is for the inventory level graph 
ProductGraph(){
  
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Inventory Level"
        },
        axisY: {
            includeZero: true
        },
        
        data: [{
            type: "column", 
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            xValueFormatString: "MMM YYYY",

            dataPoints: [
                
                { x : new Date(this.state.response.map(item => (item['date'][0]))[0]) , y :  this.state.response.map(item => (item['quantity'][0]))[0]},
                { x :  new Date(this.state.response.map(item => (item['date'][1]))[0]), y :  this.state.response.map(item => (item['quantity'][1]))[0]},
                { x: new Date (this.state.response.map(item => (item['date'][2]))[0]) , y :  this.state.response.map(item => (item['quantity'][2]))[0]},
                { x: new Date( this.state.response.map(item => (item['date'][3]))[0]) , y :  this.state.response.map(item => (item['quantity'][3]))[0]},
                
            ]
        }]
    }
    const optionsD = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Inventory Level"
        },
        axisY: {
            includeZero: true
        },
        
        data: [{
            type: "column", 
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            xValueFormatString: "MMM YYYY",


            dataPoints: [
                
                { x : new Date( this.state.response.map(item => (item['date'][0]))[1]), y :  this.state.response.map(item => (item['quantity'][0]))[1]},
                { x : new Date(this.state.response.map(item => (item['date'][1]))[1]), y :  this.state.response.map(item => (item['quantity'][1]))[1]},
                { x : new Date( this.state.response.map(item => (item['date'][2]))[1]) , y :  this.state.response.map(item => (item['quantity'][2]))[1]},
                { x : new Date( this.state.response.map(item => (item['date'][3]))[1] ), y :  this.state.response.map(item => (item['quantity'][3]))[1]},
                
            ]
        }]
    }
    const optionsP = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", //"light1", "dark1", "dark2"
        title:{
            text: "Inventory Level"
        },
        axisY: {
            includeZero: true
        },
        
        data: [{
            type: "column", 
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            xValueFormatString: "MMM YYYY",

            dataPoints: [
                
                {x : new Date(this.state.response.map(item => (item['date'][0]))[2]), y :  this.state.response.map(item => (item['quantity'][0]))[2]},
                {x : new Date(this.state.response.map(item => (item['date'][1]))[2]), y :  this.state.response.map(item => (item['quantity'][1]))[2]},
                {x :  new Date(this.state.response.map(item => (item['date'][2]))[2] ), y :  this.state.response.map(item => (item['quantity'][2]))[2]},
                {x : new Date( this.state.response.map(item => (item['date'][3]))[2]) , y :  this.state.response.map(item => (item['quantity'][3]))[2]},
                
            ]
        }]
    }
    if ((this.state.test === true )&& (this.state.value) === "Mouse" )  { 
    return (
    <div>
        <CanvasJSChart options = {options}  />
        
    </div>
    );
}
    else if ((this.state.test === true )&& (this.state.value) === "Dress" ){
        return(
        <div>
            <CanvasJSChart options = {optionsD}  />
            
        </div>
        );
    }
    else if ((this.state.test === true )&& (this.state.value) === "Phone" ){
        return(
        <div>
            <CanvasJSChart options = {optionsP}  />
            
        </div>
        );
    }}
// Table of data filtered on the selected product
productTable =()=>
{
    console.log(JSON.stringify(this.state.value));
    
    if ((this.state.testTable === true) && (this.state.value) === "Mouse" )  {
    return (
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product name</th>
            <th>Product type</th>
            <th>Product quantity</th>
            <th>Date of Stock Arrival</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{this.state.response.map( item => (item.name ))[0]} </td>
            <td>{this.state.response.map( item => (item.Type ))[0]}</td>
            <td>{this.state.response.map( item => (item.quantity ))[0][3]}</td>
            <td>{this.state.response.map( item => (item.date ))[0][3]}</td>
          </tr>
          
        </tbody>
      </Table>
    );
    }
    else if ((this.state.testTable === true) && (this.state.value) === "Dress" ) {
    return (
        
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product name</th>
            <th>Product type</th>
            <th>Product quantity</th>
            <th>Date of Stock Arrival</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{this.state.response.map( item => (item.name ))[1]} </td>
            <td>{this.state.response.map( item => (item.Type ))[1]}</td>
            <td>{this.state.response.map( item => (item.quantity ))[1][3]}</td>
            <td>{this.state.response.map( item => (item.date ))[1][3]}</td>
          </tr>
          
        </tbody>
      </Table>
    );
    }
    else if ((this.state.testTable === true) && (this.state.value) === "Phone" ) {
        return (
        
            <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Product name</th>
                <th>Product type</th>
                <th>Product quantity</th>
                <th>Date of Stock Arrival</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{this.state.response.map( item => (item.name ))[2]} </td>
                <td>{this.state.response.map( item => (item.Type ))[2]}</td>
                <td>{this.state.response.map( item => (item.quantity ))[2][3]}</td>
                <td>{this.state.response.map( item => (item.date ))[2][3]}</td>
              </tr>
              
            </tbody>
          </Table>
        );
    }
};
//<ul>
  //       {this.state.response.map( item => <li key={item} >{item.name }</li>)}
    //    </ul> 

render() {

    return (
        
        <div className="App">
         <div><h1>Choose the product to visualize ! </h1></div>
        <div  className="renderProduct">
        {this.renderProduct()}
        <div> <Button variant="primary" size="lg" active onClick={this.handleEventTable} className="btn btn-secondary btn-sm" > Show Product Table</Button>{' '}</div>
        <div> {this.productTable()}</div>
        <div>
        <Button variant="primary" size="lg" active onClick={this.handleEvent} className="btn btn-secondary btn-sm" > Show Product Inventory</Button>{' '}
        </div>
        <div >{this.ProductGraph()}</div>
        
        </div>
        </div>
            
    );
    
}

}
