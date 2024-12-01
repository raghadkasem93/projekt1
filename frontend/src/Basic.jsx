import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gruppe.css';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BorderTopIcon from '@mui/icons-material/BorderTop';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import Table from 'react-bootstrap/Table';

const Basic = () => {
    return (
        <div className="container py-4">
          <div className="row">
          
            <div className="col-lg-3 col-md-4 col-12 mb-3 order-md-last">
              <ul className="list-unstyled links">
                <li><a href="#link4" className="link-item">الفرقة <SchoolIcon /></a></li>
                <li><a href="#link1" className="link-item">الحلقات الاساسية <AssignmentIcon /></a></li>
                <li><a href="#link2" className="link-item">الحلقات الفرعية <BorderTopIcon /></a></li>
                <li><a href="#link3" className="link-item">المصادر <ImportContactsIcon /></a></li>
                <li><a href="#link4" className="link-item">الاختبارات <DownloadDoneIcon /></a></li>
                <button className="signbtn">تسجيل الخروج</button>
              </ul>
            </div>
    
            <div className="col-lg-8 col-md-7 col-12">
              <h1 className="main-title32">مرحبا اسم الطالبة</h1>
              <div className="mb-4">
                <h3 className="main-title1">جدول الحلقات</h3>
                
             
                <Table striped bordered >
                  <thead>
                    <tr>
                    <th>اللينك</th>
                    <th>ملاحظات</th>
                    <th>المعلمة</th>
                    <th>الموعد</th>
                      <th>المادة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td> 
                     <td></td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td> 
                     <td></td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td> 
                     <td></td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td> 
                     <td></td>
                    </tr>
                    <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td> 
                     <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

           
            <div className="col-lg-1 col-md-1 d-none d-md-flex justify-content-center">
              <div className="vr separator"></div>
            </div>
          </div>
        </div>
    );
};

export default Basic;
