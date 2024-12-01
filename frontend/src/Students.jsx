import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import i18n from "i18next";
import axios   from"axios";
import './Students.css'
import {

  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  

} from 'mdb-react-ui-kit';
const Students = () => {
const [students, setStudents] = useState({
  name: '',
  email: '',
  nationalID: '',
  birthOfDate: '',
  phoneWhats: '',
  phoneTelgram: '',
  class: '',
  department: '',
  password: '',
  confirmPassword: '',

})
    const { t } = useTranslation();
    const currentLanguage = i18n.language;
    const isArabic = currentLanguage === 'ar';

function getStudentData(eventInfo){

let myStudent={...students};
myStudent[eventInfo.target.name] = eventInfo.target.value;
setStudents(myStudent);
console.log(myStudent);

}

function subRegister(e){
e.preventDefault();
  sendStudentstoapi();

}

async function sendStudentstoapi() {
 
  let {data} = await axios.post('http://localhost:9092/api/students/register', students);
console.log(data);
 
}




    return (
        <MDBContainer fluid className='p-4 custom1' dir={isArabic ? 'rtl' : 'ltr'}>
          <MDBRow className= "d-flex justify-content-center align-items-center">
            <MDBCol md='6'>
              <h2 className="text-center my-5 custmh1">{t('New Account3')}</h2>
              <MDBCard className='my-5 mx-auto' style={{ maxWidth: '50rem' }}>
                <MDBCardBody className='p-5'>
               
                  <MDBRow className='mb-4'>
                    <MDBCol>
                      <input onChange={getStudentData} className='mb-4 custom-input' placeholder={t('Name')} type='text' name='name'/>
                    </MDBCol>
                    <MDBCol>
                      <input  onChange={getStudentData} className='mb-4 custom-input' placeholder={t('Email')} type='text' name='email'/>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className='mb-4'>
                    <MDBCol>
                      <input onChange={getStudentData} className='mb-4 custom-input' placeholder={t('national number')} type='text' name='nationalID' />
                    </MDBCol>
                    <MDBCol>
                      <input  onChange={getStudentData} className='mb-4 custom-input' placeholder={t('Birth')} type='text' name='birthOfDate'/>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className='mb-4'>
                    <MDBCol>
                      <input onChange={getStudentData} className='mb-4 custom-input' placeholder={t('Phone1')} type='text'  name='phoneWhats'/>
                    </MDBCol>
                    <MDBCol>
                      <input onChange={getStudentData} className='mb-4 custom-input' placeholder={t('Phone')} type='text' name='PhoneTelgram'/>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className='mb-4'>
                    <MDBCol>
                      <input onChange={getStudentData} className='mb-4 custom-input' placeholder={t('Gruppe')} type='text' name='class'/>
                    </MDBCol>
                    <MDBCol>
                      <input onChange={getStudentData} className='mb-4 custom-input' placeholder={t('section')} type='text' name='department'/>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className='mb-4'>
                    <MDBCol>
                      <input onChange={getStudentData} className='mb-4 custom-input' placeholder={t('password')} type='text' name='password' />
                    </MDBCol>
                    <MDBCol>
                     
                    <input onChange={getStudentData} className='mb-4 custom-input' placeholder={t('password2')} type='password' name='confirmPassword'/>

                     
                    </MDBCol>
                  </MDBRow>
    
                  
    
                   <MDBRow className='justify-content-center'>
                    <MDBCol md='6'>
                      <button onClick={subRegister} className='w-100 mb-4 signbtn' type='submit' size='md'>{t('New Account')}</button>
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

export default Students