import { Layout } from 'antd';
import React from 'react';
import NavLogo from '../Static/Images/NavLogo.png'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './style.css'
import { Menu } from 'antd';
import Footer from 'Component/Footer';
// import { useState } from 'react';

const AppLayout = () => {
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Home', 'home',),
    getItem('Features', 'features',),
    getItem('Services', 'services',),
    getItem('Doctor', 'doctors',),
    getItem('Blog', 'blog',),
    getItem('Appointment', 'appointment',),
    getItem('Contact', 'contact',),
  ];

  const navigate = useNavigate()
  const onClick = (e) => {
    navigate(e.key)
  };
  return (
    <Layout>
      <Layout.Header className='headerStyle'>
        <img src={NavLogo} alt='' className='Logo' />
        <span className='spanx'></span>
        <Menu onClick={onClick} mode="horizontal" items={items} className="header" />
      </Layout.Header>
      <Layout>
        <Layout.Content className='contentStyle'>
          <Outlet />
        </Layout.Content>
      </Layout>
      <Layout>
        <Layout.Footer>
          <Footer></Footer>
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}

export default AppLayout