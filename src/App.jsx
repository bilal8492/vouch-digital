import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ImageSection from './components/ImageSection';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Form />
        <ImageSection />
      </div>
    </>
  );
};

export default App;