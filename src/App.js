/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Form } from 'react-bootstrap';
import { Button,FormControl,Container } from 'react-bootstrap';
import { Navibar, DaeMoon ,Footer } from './frame.js';
import { 휴게소날씨정보, Weather } from './Weather.js'; 
import Loading from './Loading.js'
import './Weather.css'; 
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
  
  const getFood = async() => {
    const url = `http://data.ex.co.kr/openapi/business/representFoodServiceArea?key=${API_KEY}&type=json&numOfRows=${numOfRows}&pageNo=`
    const temp = []
    try {
      for(var i=0; i<3; i++) {
        const res = await axios.get(url + (i+1).toString())
        const data = res.data.list
        temp.push(...data)
      }
      setFoodData(temp)
      setIsLoading(false)
      console.log(temp)
    } catch(err){
      console.log('ERROR')
    }
  }

  useEffect( ()=>{
    console.log(날씨Data);
    getFood()
  },[])
  
  return (
    <div className="App">
      
      <Navibar />

      <DaeMoon />
      
      <main className="container">
        <br/>
        
        <휴게소날씨정보 날씨Data변경 ={날씨Data변경} />
        <Weather 날씨Data={날씨Data}/>

        {isLoading ? <Loading/> : 
        <RepFood 
          routeCode={routeCode}
          data = {foodData}
          />}
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
