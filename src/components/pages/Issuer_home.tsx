import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { database1 } from "./firebase-issuer";

import { ref, push, set, child, update, onValue } from "firebase/database";
import { DIDtype } from "./types";


export const Issuer_home = () => {
  const navigate = useNavigate()

  const newdid1 = {
    did: '76yugjys',
    pk: 'sejtfyh',
    sk: 'hynshh'
  };
  
  return (
  <div>
    <h1>Issuer's DID List</h1>
  </div>
)

}

export default Issuer_home;