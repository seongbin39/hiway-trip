import React, { useState, useEffect } from 'react'
import './App.css'
// import axios from "axios"

import Food from './Food'
// import Button from './Button'
// import Sms from './RealTimeSms'

const RepFood = (props) => {
  const data = props.data

  const foodUI =
    data
      .filter(data => {
        const batchMenu = data.batchMenu
        const routeCode = data.routeCode
        return (
          (batchMenu !== null) && (routeCode == '0010')
        )
      })
      .map((data, cnt) => {
        return (
          <Food
            key={cnt}
            serviceAreaName={data.serviceAreaName}
            svarAddr={data.svarAddr}
            batchMenu={data.batchMenu}
            salePrice={data.salePrice}
          />
        )
      })

  return (
    <div className="col-md-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <div>{foodUI}</div>
        </div>
      </div>
    </div>
  )
}

// class App extends React.Component {
//   state = {
//     isLoading: true,
//     data: [],
//     numOfRows: 5,
//     pageNo: 1,
//     pageSize: null
//   }

//   getRealTimeSms() {
//     const API_KEY = process.env.REACT_APP_API_KEY
//     const url = `http://data.ex.co.kr/openapi/burstInfo/realTimeSms?key=${API_KEY}&type=json&numOfRows=10&pageNo=1&sortType=desc&pagingYn=Y` 

//     axios.get(url).then((res) => {
//       const data = res.data.realTimeSMSList
//       const pageSize = res.data.pageSize

//       this.setState({
//         isLoading: false,
//         data: data,
//         pageSize: pageSize,
//       }, () => {console.log(data)})
//     })
//   }

//   componentDidMount() {
//     this.getRealTimeSms()
//   }

//   render() {
//     const {isLoading, data, pageNo, pageSize} = this.state
//     const {nextPage, prevPage} = this

//     return(
//       <div className="App">
//         {isLoading ? (
//           <div>
//             <span>Loading...</span>
//           </div>
//         ): (
//           <div>
//             {data.map((d,cnt) => {
//               return (
//                 <Sms
//                 key = {cnt}
//                 smsText = {data[cnt].smsText}
//                 >
//               </Sms>
//               )
//             })}
//           </div>
//         )}
//       </div>
//     )
//   }
// }

// const nextPage = () => {
//   const nextPage = pageNo +1
//   setPageNo(() => {
//     return (nextPage<=pageSize) ? nextPage : pageNo
//   })
// }

// const prevPage = () => {
//   const prevPage = pageNo -1
//   setPageNo((prevPage>0) ? prevPage : pageNo+0)
// }

// const changeRows = () => {
//   setNumOfRows(numOfRows===10? numOfRows=5 : numOfRows=10)
// }

export { RepFood }
