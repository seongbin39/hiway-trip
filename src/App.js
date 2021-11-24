/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form } from 'react-bootstrap';
import { Button,FormControl,Container } from 'react-bootstrap';
import { Navibar, DaeMoon ,Footer } from './frame.js';
import { 휴게소날씨정보, Weather } from './Weather.js'; import './Weather.css'; 
import axios from "axios"
import './App.css';

import {RepFood, getFood} from './RepFood.js'

function App() {
  let[날씨Data, 날씨Data변경] = useState([]);

  const [routeCode, setRouteCode] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [foodData, setFoodData] = useState([])
  const [numOfRows, setNumOfRows] = useState(99)
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState(2)

  const API_KEY = process.env.REACT_APP_API_KEY
  const url = `http://data.ex.co.kr/openapi/business/representFoodServiceArea?key=${API_KEY}&type=json&numOfRows=${numOfRows}&pageNo=`
  
  const getdata = async() => {
    try {
      const res = await axios.get(url + '1')
      const data = res.data.list
      const res2 = await axios.get(url + '2')
      const data2 = res2.data.list
      const res3 = await axios.get(url + '3')
      const data3 = res3.data.list
      setFoodData(data.concat(data2.concat(data3)))
      
      setIsLoading(false)
      
    } catch(err){
      console.log('ERROR')
    }
  }

  useEffect( ()=>{
    console.log(날씨Data);
    getdata()
    console.log(foodData)
  },[])
  
  return (
    <div className="App">
      
      <Navibar />

      <DaeMoon />
      
      <main className="container">
        <br/>
        
        <휴게소날씨정보 날씨Data변경 ={날씨Data변경} />
        <Weather 날씨Data={날씨Data}/>

        {isLoading ? 'Loading...' : <RepFood 
          routeCode={routeCode}
          data = {foodData}
          setIsLoading = {setIsLoading}
          />}
        

      </main>

      <Footer />
      
    </div>
  );
}

export default App;
