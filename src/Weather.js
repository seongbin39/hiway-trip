/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Weather(props){
    return(

    <div className="col-md-12">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

            <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success"><h3> {props.weather.unitName} </h3></strong>
                <h3 className="mb-1">{props.weather.routeName}</h3>
                <div className="mb-1 text-muted">주소 : {props.weather.addr}</div>
                <p className="mb-auto">노선번호 : {props.weather.routeNo}</p>
                <p className="mb-auto">측정시간 : {props.weather.stdHour} 시</p>
                
                {/* <a href="#" className="stretched-link">Continue reading</a> */}
            </div>

            {/* <div class="col-auto d-none d-md-block"> */}
            <div className="col-md-4 p-3 d-none d-md-block border rounded overflow-hidden shadow-sm">
            
                <div className='card mx-auto'>
                    {/* <img src="./logo192.png" class="card-img" alt=""/> */}
                    <div className="card-img-overlay"> 
                        <h5>{props.weather.weatherContents}</h5>
                        {/* <div class="rainy"></div>
                        <div class="sunny"></div> */}
                        {/* <div class="cloudy"></div> */}
                        <div className="rainy"></div>
                        {/* <div class="snowy"></div>
                        <div class="rainbow"></div>
                        <div class="starry"></div>
                        <div class="stormy"></div> */}
                    </div>
                </div>
            </div>

        </div>
    </div>

)}

export { Weather }
// export default Weather
