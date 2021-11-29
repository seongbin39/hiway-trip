/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navibar, DaeMoon ,Footer } from './frame.js';
import { Weather } from './Weather.js'; 
import Loading from './Loading.js'
import Input from './Input.js'
import './Weather.css'; 
import axios from "axios"
import './App.css';

import { RepFood } from './RepFood.js'

function App() {
  const [weather, setWeather] = useState([]);

  const [routeCode, setRouteCode] = useState('')
  const [direction, setdirection] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [foodData, setFoodData] = useState([])
  const [numOfRows, setNumOfRows] = useState(99)

  const handleClick = (e) => {
    // const { code } = e.target.id
    const { name, value } = e.target
    setRouteCode(name)
    setdirection(value)
    console.log(name, value)
    console.log(routeCode,direction)
  }

  const API_KEY = process.env.REACT_APP_API_KEY

  // 휴게소 메뉴정보 불러오기
  useEffect( async ()=>{
    const url = `http://data.ex.co.kr/openapi/business/representFoodServiceArea?key=${API_KEY}&type=json&routeCode=${routeCode}&numOfRows=${numOfRows}&pageNo=`
    const temp = []
    try {
      for(var i=0; i<3; i++) {
        const res = await axios.get(url + (i+1).toString())
        const data = res.data.list
        temp.push(...data)
      }
      const res = await axios.get(url + '1')
      const data = res.data.list
      temp.push(...data)
      setFoodData(temp)
      setIsLoading(false)
      console.log(temp)
    } catch(err){
      console.log('Food ERROR')
    }
  },[routeCode])

  // 날씨정보 불러오기
  useEffect( async () => {
    const url = `https://data.ex.co.kr/openapi/restinfo/restWeatherList?key=${API_KEY}&type=json&sdate=20211121&stdHour=18`
    try {
      const res = await axios.get(url)
      const data = res.data.list[0]
      setWeather(data)
    }catch{
      console.log('Weather ERROR')
    }
  },[])
  
  return (
    <div className="App">
      
      <Navibar />

      <DaeMoon />
      
      <main className="container">
        <br/>
        <Input
          onClick={handleClick} />
        <Weather weather={weather}/>

        {/* 휴게소 정보 컴포넌트, 로딩 중이면 로딩화면 표시 */}
        {isLoading ? <Loading/> : 
        <RepFood 
          routeCode={routeCode}
          direction={direction}
          data = {foodData}
          />}
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
