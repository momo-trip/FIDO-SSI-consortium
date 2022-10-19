import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import { database } from "./firebase";
import { ref, push, set, child, update } from "firebase/database";


export const Holder2 = () => {
  const navigate = useNavigate()

  const location = useLocation();
  const  receivedvc  = location.state;

  // save the received VC in the PLR App
  const date = new Date();
  const didRef = ref(database, "/vcs/" + `${date}`);
  set(didRef, receivedvc);


  return (
    <div>
    <p>The VC is successfully issued and saved in the PLR app.</p>
    </div>
  )
}

export default Holder2;