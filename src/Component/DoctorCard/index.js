import React from 'react';
import { Card, Col, Row } from 'antd';
import './style.css';
import { Link } from "react-router-dom";
import { doctors } from '../../doctorData';
const DoctorCard = () => {
  return (
    <Row gutter={16} style={{justifyContent:'center'}}>
      {doctors.map((data) => (
        <Col span={6} key={data.id}>
          <Card className='doctor-card'>
            <Link to={`/doctors/${data.id}`}>
              <div className='avatar'>
                <img src='https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg' alt='qwe' />
              </div>
              <div className='name'>{data.name}</div>
              <div className='staff'>{data.staff}</div>
              <div className='address'>{data.address}</div>
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default DoctorCard