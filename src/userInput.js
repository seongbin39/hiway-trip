/*eslint-disable*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton,Dropdown,ItemText,Item } from 'react-bootstrap';
import { Button,FormControl,Container } from 'react-bootstrap';


function UserInput(props){
    return(

    <div className="col-md-12">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

            <div className="col-md-12 p-1 d-none d-md-block border rounded overflow-hidden shadow-sm">
                <h5> 입력단 </h5>
            </div>

            <div className="col p-4 d-none d-md-block border rounded overflow-hidden shadow-sm">
                <DropdownButton id="dropdown-item-button" title="Dropdown button" size="sm" variant="secondary">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
            </div>

            <div className="col p-4 d-flex flex-column position-static">
    {/*        <div>
     {[DropdownButton, SplitButton].map((DropdownType, idx) => (
      <DropdownType
        as={ButtonGroup}
        key={idx}
        id={`dropdown-button-drop-${idx}`}
        size="sm"
        variant="secondary"
        title="Drop small"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownType>
    ))}
  </div> */}

                {/* <strong className="d-inline-block mb-2 text-success"><h3> 헬로 </h3></strong> */}
            </div>

            {/* <div class="col-auto d-none d-md-block"> */}
            <div className="col-md-4 p-3 d-none d-md-block border rounded overflow-hidden shadow-sm">
            
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
