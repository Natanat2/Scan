import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './MobileHeader.css';
import logo from '../Media/Logo_footer.svg';
import mobile from '../Media/mobile.svg';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch  } from "react-redux";
import { signOut } from '../../Requests/profile';

function LoginButton() {
  let companyInfo = useSelector(state => state.profile.companyInfo);
  const TitleButton = companyInfo ? 'Выйти' : 'Войти';  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate("/login");
    if (companyInfo) {
      dispatch(signOut());
    } 
  }

  return (
    <button className='NewButton' type="button" onClick={handleClick} style={{ backgroundColor: companyInfo ? '#7CE3E1' : '#7CE3E1' }}>
      {TitleButton}
    </button>
  );
}

function ReturnMain() {
  const navigate = useNavigate();

  function handleClick(evt) {
    navigate("/");
  }

  return (
    <Nav.Link href="/" onClick={handleClick}>Главная</Nav.Link>
  );
}  

function MobileHeader() {
  const expand = false;

  return (    
    <Navbar key={expand} expand={expand} className="mb-3 NewMobileMenu"> 
      <Container fluid>
        <Navbar.Toggle bg="*" aria-controls={`offcanvasNavbar-expand-${expand}`} className='own NewMobileMenuToggle border-0 shadow-none'> {/* Измененное название класса */}
          <img src={mobile} alt='mobile' />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton className='NewMobileMenuHeader closeButton d-flex'> 
            <div className='NewLogo'> 
              <img src={logo} alt='logo'/>
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body className='NewMobileMenuBody'> 
            <Nav className="text-center nav">
              <ReturnMain />
              <Nav.Link href="###" style={{pointerEvents: 'none'}}>Тарифы</Nav.Link>
              <Nav.Link href="###" style={{pointerEvents: 'none'}}>FAQ</Nav.Link>
            </Nav>
            <a className='NewMobileMenuLink' href='XXX'>Зарегистрироваться</a> 
            <LoginButton />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar> 
  );
}

export default MobileHeader;