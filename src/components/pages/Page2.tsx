import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { tom01 } from './Data';

interface State {
  uniID: string;
  password: string;
}

export const Page2 = () => {
  const navigate = useNavigate()

  const location = useLocation();
  const { uniID } = location.state as State;
  const { password } = location.state as State;

  const data = tom01;

  if(uniID === data.uniID && password === data.password){
  return (
    <div>
    <p>Hi {data.name}, your account is successfully authenticated.</p>
    <p>Next, please provide us your DID info.</p>
    <p><button onClick={() => navigate('/Holder1')}>Create your new DID.</button></p>
    </div>
  )
  }else{
    return(
      <div>
        <p>Uour account info is not correct.</p>
    </div>
    )
  }

}

export default Page2;