/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navibar, DaeMoon ,Footer } from './frame.js';
import { Weather } from './Weather.js'; 
import Loading from './Loading.js'
import Dropdown from './DropDown.js'
import './Weather.css'; 
import axios from "axios"
import './App.css';
import {UserInput} from './userInput.js';

import { RepFood } from './RepFood.js'

function App() {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [foodData, setFoodData] = useState([])
  const [numOfRows, setNumOfRows] = useState(99)
  const [routeCode, setRouteCode] = useState('')
  const [direction, setDirection] = useState('')
  const [routeName, setRouteName] = useState('')

  let[rdApi, rdApi변경] = useState(false);
  let[message, setMessage] = useState([]);
  let[갱신, 갱신값변경] = useState(true);
  let[갱신2, 갱신값변경2] = useState(true);
  let[start, setStart] = useState('대구');
  let[end, setEnd] = useState('서울');

  const handleClick = (e) => {
    const { name, value } = e.target
    setRouteCode(name)
    setDirection(value)
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
      setFoodData(temp)
      setIsLoading(false)
      console.log(temp)
    } catch(err){
      console.log('Food ERROR')
    }
  },[routeCode])

  useEffect( async () => {
    switch(start){
      case '서울':
        switch(end){
          case '부산':
            setDirection('부산')
            setRouteCode('0010')
            break;
          case '대구':
            setDirection('부산')
            setRouteCode('0010')
            break;
          case '광주':
            setDirection('광주')
            setRouteCode('0010')
            break;
          case '대전':
            setDirection('부산')
            setRouteCode('0010')
            break;  
        }
      case '부산':
        switch(end){
          case '서울':
            setDirection('서울')
            setRouteCode('0010')
            break;
          case '대구':
            setDirection('서울')
            setRouteCode('0010')
            break;
          case '광주':
            setDirection('광주')
            setRouteCode('0010')
            break;
          case '대전':
            setDirection('부산')
            setRouteCode('0010')
            break;
        }
      case '대구':
        switch(end){
          case '서울':
            setDirection('서울')
            setRouteCode('0010')
            break;
          case '부산':
            setDirection('부산')
            setRouteCode('0010')
            break;
          case '광주':
            setDirection('광주')
            setRouteCode('0122')
            break;
          case '대전':
            setDirection('부산')
            setRouteCode('0010')
            break;
        }
      case '대전':
        switch(end){
          case '서울':
            setDirection('서울')
            setRouteCode('0010')
            break;
          case '부산':
            setDirection('부산')
            setRouteCode('0010')
            break;
          case '광주':
            setDirection('광주')
            setRouteCode('0010')
            break;
          case '대전':
            setDirection('부산')
            setRouteCode('0010')
            break;
        }
      case '광주':
        switch(end){
          case '서울':
            setDirection('서울')
            setRouteCode('0010')
            break;
          case '부산':
            setDirection('부산')
            setRouteCode('0010')
            break;
          case '대구':
            setDirection('대구')
            setRouteCode('0122')
            break;
          case '대전':
            setDirection('부산')
            setRouteCode('0010')
            break;
        }
    }
    console.log(direction, routeCode)
  },[start,end])

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
        <UserInput 
          start={start} setStart={setStart} 
          end={end} setEnd={setEnd} 
          setIsLoading = {setIsLoading}/>
        <Weather weather={weather}/>

        {/* 휴게소 정보 컴포넌트, 로딩 중이면 로딩화면 표시 */}
        {isLoading ? <Loading/> : 
        <RepFood
          data = {foodData}
          onClick = {handleClick}
          routeCode = {routeCode}
          direction = {direction}
          start = {start}
          end = {end}
          />}
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
