import React from 'react'
import './register.css'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import { Link } from 'react-router-dom';
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  

} from 'mdb-react-ui-kit';
const Register = () => {

  const { t } = useTranslation();
  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === 'ar';
  return (
    <MDBContainer fluid className='p-4 custom1' dir={isArabic ? 'rtl' : 'ltr'}>
      <MDBRow >
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center '>
          <img src='./Foto/logfoto.jpeg' className="my-5 display-3 fw-bold ls-tight px-3 customimg" alt=''/>
        </MDBCol>

        <MDBCol md='6'>
          <h2 className="text-center my-5 custmh1">{t('New Account')}</h2> 
          <MDBCard className='my-5 mx-auto' style={{ maxWidth: '40rem' ,maxHeight:'40rem'}}>
            <MDBCardBody className='p-5'>
            <MDBRow className='mb-4'>
                <MDBCol>
                  <Link to='/students' className='w-100 signbtn' size='md'>{t('Studentin')}</Link>
                </MDBCol>
                <MDBCol>
                  <Link to='/child' className='w-100 signbtn' size='md'>{t('Childerns')}</Link>
                </MDBCol>
              </MDBRow>
              <MDBRow className='mb-4'>
                <MDBCol>
                  <Link  to='/teacher'className='w-100 signbtn' size='md'>{t('Teacher')}</Link>
                </MDBCol>
                <MDBCol>
                  <Link to='/leiter' className='w-100 signbtn' size='md'>{t('leiter')}</Link>
                </MDBCol>
              </MDBRow>

              <div className="text-center">
                <p className='custmh1'>{t('Have Account')}</p>
               
              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register