import React from 'react'

import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/RepFood.css'

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
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    prevArrow : <button type='button' className='slick-prev'>Previous</button>, // 이전 화살표 모양 설정
		nextArrow : <button type='button' className='slick-next'>Next</button>,
    responsive: [ // 반응형 설정
      {
        breakpoint:1300,
        settings:{
          slidesToShow:3,
          slidesToScroll:3
        }
      },
      {
        breakpoint:980,
        settings:{
          slidesToShow:2,
          slidesToScroll:2
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow:1,
          slidesToScroll:1
        }
      }
    ]
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
