import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { NavLink,Link  } from 'react-router-dom';
import i18n from "i18next";
import './NavBar.css';

const NavBar = () => {
    const { t } = useTranslation();
    const currentLanguage = i18n.language;
    const isArabic = currentLanguage === 'ar';
  
    return (
        <Navbar expand="lg" dir={isArabic ? 'rtl' : 'ltr'}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src='./Foto/Logo1.jpeg' alt='' className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink  className="nav-link" to="">{t('Home')}</NavLink>
                      
                        <NavDropdown title={t('Sections')} id="basic-nav-dropdown">
      <NavDropdown.Item>
        <Link to="/islamic"  className="custom-link">{t('Islamic Sciences')}</Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link to="kinder"  className="custom-link">{t('Children')}</Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link to="women"  className="custom-link">{t('women')}</Link>
      </NavDropdown.Item>
      
      </NavDropdown>
    
                      
                        <NavLink className="nav-link"  to="/about">{t('About Us')}</NavLink>
                        <NavLink  className="nav-link" to="">{t('Contact Us')}</NavLink>
                        <NavDropdown
                        title={<LanguageIcon className='icono' style={{ color: '#f2d04b', cursor: 'pointer' }} />}
                        id="language-dropdown"
                        align="end"
                        style={{ marginLeft: '10px' }}
                    >
                        <NavDropdown.Item onClick={() => i18n.changeLanguage("ar")}   className="custom-dropdown-item">العربية</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}  className="custom-dropdown-item">English</NavDropdown.Item>
                    </NavDropdown>

                    </Nav>
         
                  <NavLink  to="/register" className="button">{t('Registration')}</NavLink>
                  <NavLink to="/login" className="button">{t('login')}</NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
