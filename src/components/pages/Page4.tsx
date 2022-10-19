import React from 'react';
import { useNavigate } from "react-router-dom";

export const Page4 = () => {
  const navigate = useNavigate()

  return (
    <div>
    <p>Please chose your desired DID type.</p>
    <p><button onClick={() => navigate('/Page5')}>Diploma</button></p>
    <p><button onClick={() => navigate('/Page5')}>Transcript</button></p>
    </div>
  )
}

export default Page4;