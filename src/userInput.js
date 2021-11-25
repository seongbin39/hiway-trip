/*eslint-disable*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton,Dropdown,ItemText,Item } from 'react-bootstrap';
import { Button,FormControl,Container } from 'react-bootstrap';
import './userInput.css'; 


function UserInput(props){
    let 광역시 = ['서울','대전','대구','부산','광주']

    return(

    <div className="col-md-12" >
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

            <div className="col-md-12 p-1 d-none d-md-block border rounded overflow-hidden shadow-sm">
                <h5> 입력단 </h5>
            </div>

            <div className="col p-4 d-none d-md-block border rounded overflow-hidden shadow-sm" style={{ padding: '0px', backgroundColor: 'lightyellow', height: '200px'}}>
                <DropdownButton id="dropdown-item-button" title="출발지 선택" size="sm" variant="secondary" >
                {
                    광역시.map(function(글, i){ // 요소수 만큼 반복
                    return (
                        <Dropdown.Item as="button" onClick={ ()=>{props.set출발지(글)} }>{글}</Dropdown.Item>
                    )})
                }
                </DropdownButton>
                <hr/>
                <strong className="d-inline-block mb-2 text-success"><h2> {props.출발지} </h2></strong>

            </div>

            <div className="col p-4 d-none d-md-block border rounded overflow-hidden shadow-sm">
                <DropdownButton id="dropdown-item-button" title="도착지 선택" size="sm" variant="secondary">
                {
                    광역시.map(function(글, i){ // 요소수 만큼 반복
                    return (
                        <Dropdown.Item as="button" onClick={ ()=>{props.set도착지(글)} }>{글}</Dropdown.Item>
                    )})
                }
                </DropdownButton>
                <hr/>
                <strong className="d-inline-block mb-2 text-success"><h2> {props.도착지} </h2></strong>
            </div>

            <div className="col p-4 d-none d-md-block border rounded overflow-hidden shadow-sm">
                <div className='card mx-auto'>
                    <div className="card-img-overlay"> 
                        <h5>헤헬로</h5>                     
                    </div>
                </div>
            </div>

        </div>
    </div>

)}

export { UserInput }
// export default Weather
