import React from 'react'

import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './RepFood.css'

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    }
  `
const RepFood = (props) => {
  const data = props.data

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    // centerMode: true,
    autoplay: true,
  }

  const foodUI =
    data
      .filter(data => {
        const batchMenu = data.batchMenu
        const routeCode = data.routeCode
        return (
          (batchMenu !== null) && (routeCode === '0010')
        )
      })
      .map((data, index) => {
        return (
          <div key={index} className="food-container">
            <div className="area-name">
              {index+1}. {data.serviceAreaName}<br/>
            </div>
            <div className="food-name">
              {data.batchMenu} ( {data.salePrice} )
            </div>
          </div>
        )
      })

  return (

        <div className="main-container">
          <div className="direction">{data[0].routeName}({data[0].direction}방면) 휴게소 대표메뉴</div>
          <StyledSlider {...settings}>
            {foodUI}
          </StyledSlider>
        </div>

  )
}

export { RepFood }
