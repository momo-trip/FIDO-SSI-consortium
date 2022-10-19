import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { database } from "./firebase";
import { ref, push, set, child, update, onValue } from "firebase/database";
import { DIDtype } from "./types";
import { VCtype } from "./types";


export const Holder_home = () => {
  const navigate = useNavigate()

  const [didList, setDIDList] = useState<DIDtype[]>([]);
  const [vcList, setVCList] = useState<VCtype[]>([]);

  useEffect(() => {
    const todoRef = ref(database, "/dids");
    
    onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      const newDIDList: DIDtype[] = [];

      for (let id in data) {
        newDIDList.push({ id, ...data[id] });
      };  
      setDIDList(newDIDList);
    });


    const vcRef = ref(database, "/vcs");
    onValue(vcRef, (snapshot) => {
      const data1 = snapshot.val();
      const newVCList: VCtype[] = [];

      for (let id in data1) {
        newVCList.push({ id, ...data1[id] });
      };
      setVCList(newVCList);
    });
  }, [database]);
  

  // メモ：return <p key={index}> Issued date: {todo.id}, did: {todo.did}</p>;
  return (
  <div>
    <h1>DID List</h1>
    {didList.map((todo, index) => {
      return <p key={index}> Issued date: {todo.id}</p>;
    })}
    <h1>VC List</h1>
    {vcList.map((todo1, index) => {
      return <p key={index}> Issued date: {todo1.id} </p>;
    })}
  </div>
)

}

export default Holder_home;