import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';
import Header from '../components/Header';

export default function payment() {
  return (
    <>
      <Header />

      <div
        style={{
          display: 'flex', //
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: '100px',
          gap: 100,
        }}
      >
        <h2 style={{ fontSize: '30px', fontWeight: '700' }}>결제완료</h2>
        <AiFillCheckCircle size={100} color='green' />
      </div>
    </>
  );
}
