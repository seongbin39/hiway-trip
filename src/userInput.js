/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton,Dropdown,ItemText,Item } from 'react-bootstrap';
import { Button,FormControl,Container } from 'react-bootstrap';
import './userInput.css'; 

function UserInput(props){
    let 광역시 = ['서울','대전','대구','부산','광주']
    let 글자색 = ['warning','warning','warning','warning','warning']
    let[idx, setIdx] = useState(2)
    let[idxEnd, setIdxEnd] = useState(0)

    return(

    <div className="col-md-12" >
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

            <div className="col-md-12 p-1 d-none d-md-block border rounded overflow-hidden shadow-sm">
                <h5> 입력단 </h5>
            </div>

            <div className="col-md-4 d-none d-md-block border rounded overflow-hidden shadow-sm" >
                <div className='card col-md-12' >
                {/* <img src={require("./image/"+(props.출발지)+"배경.jpg").default} style={{ height:'200px', opacity: 0.9}} /> */}
                    <div className="card-img-overlay"> 
                        <DropdownButton id="dropdown-item-button" title="출발지 선택" size="sm" variant="secondary" >
                        {
                            광역시.map(function(글, i){ // 요소수 만큼 반복
                            return (
                                <Dropdown.Item key={i} as="button" onClick={ ()=>{props.setStart(글); setIdx(i)} }>{글}</Dropdown.Item>                                
                            )})
                        }
                        </DropdownButton>
                        <hr/>

                        {/* <h1 class="jt --debug">
                        <span class="jt__row">
                            <span class="jt__text">Jonas</span>
                        </span>
                        <span class="jt__row jt__row--sibling" aria-hidden="true">
                            <span class="jt__text">Jonas</span>
                        </span>
                        <span class="jt__row jt__row--sibling" aria-hidden="true">
                            <span class="jt__text">Jonas</span>
                        </span>
                        <span class="jt__row jt__row--sibling" aria-hidden="true">
                            <span class="jt__text">Jonas</span>
                        </span>
                        </h1> */}

                        <strong className={ "d-inline-block mb-2 text-" + (글자색[idx]) }><h1><b> {props.start}</b> </h1></strong>
                    </div>
                </div>
            </div>

            <div className="col-md-4 d-none d-md-block border rounded overflow-hidden shadow-sm">
                <div className='card col-md-12' >
                    {/* <img src={require("./image/"+(props.도착지)+"배경.jpg").default} style={{ height:'200px', opacity: 0.9}} /> */}
                        <div className="card-img-overlay"> 
                        <DropdownButton id="dropdown-item-button" title="도착지 선택" size="sm" variant="secondary">
                        {
                            광역시.map(function(글, i){ // 요소수 만큼 반복
                            return (
                                <Dropdown.Item key={i} as="button" onClick={ ()=>{props.setEnd(글); setIdxEnd(i)} }>{글}</Dropdown.Item>
                            )})
                        }
                        </DropdownButton>
                        <hr/>
                        <strong className={"d-inline-block mb-2 text-" + (글자색[idxEnd]) }><h1><b> {props.end} </b></h1></strong>
                    </div>
                </div>
            </div>

            <div id="fabio" className="col p-4 d-none d-md-block border rounded overflow-hidden shadow-sm">
                <div className='card mx-auto'>
                    {/* <img src={require("./image/대구배경.jpg").default} class="back-img" alt=""/> */}

                    {/* <div className="card-img-overlay"> 
                        <h5>헤헬로</h5>                     
                    </div> */}
                    <div className="wrap">
                        {/* <button className="selButton" onClick={ ()=>{누른제목변경(i), 모달변경(true)} }>Submit</button> */}
                        <button className="selButton" onClick={ ()=>{props.setIsLoading(true)} }>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

)}

export { UserInput }
// export default Weather
