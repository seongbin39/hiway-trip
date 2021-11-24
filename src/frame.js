/*eslint-disable*/
import { Navbar,Nav,NavDropdown,Form,Button,FormControl,Container } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom'; // 네비바
import './App.css';

function Navibar(){
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img className = "App-logo"
              alt=""
              src="/logo192.png"
              // src={require("./image/마스크.png").default}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{''}
          
          리엑트
          {/* </Link> */}
          </Navbar.Brand>
          {/* <Nav.Link> <Link to="/">Home</Link> </Nav.Link> */}
          {/* <Nav.Link> <Link to="/detail">Detail</Link> </Nav.Link> */}
          {/* <Nav.Link as={Link} to='/'> Home </Nav.Link> */}
          {/* <Nav.Link as={Link} to='/detail/1'> Detail </Nav.Link> */}
        </Container>
      </Navbar>
    )
  }

function DaeMoon(){
    return(
        <div className='daeMoon'>
        <Container>
          <h1> All great ideas come from walking. </h1>  
          <p>
            F. Nietzsche
          </p>
        </Container>
      </div>

    )
}

function Footer(){
    return(
    //   <div className="col-md-4">
    //       헤엘로
    //   </div>
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                {/* <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                </a>
                <span className="text-muted">© 2021 Company, Inc</span>
            </div>

            {/* <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
            </ul> */}
            </footer>
        </div>
    )
  }

export { Navibar, DaeMoon, Footer }