import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { tom01 } from './Data';

import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';

import { calculateBackoffMillis } from '@firebase/util';


interface State {
  uniID: string;
  password: string;
}

export const Page5 = () => {
  const navigate = useNavigate()

  // create the issuer's did (本当はここではないので、後で直す)
  const issuerdid = ed.utils.randomPrivateKey();
  
  // create a vc for the holder
  const data = tom01;

  const claimed = JSON.stringify({
    id: "did:example:ebfeb1f712ebc6f1c276e12ec21",
    alumniOf: {
      id: "did:example:`${issuerdid}`",
      name: "The University of Tokyo",
      degree: "Ph.D in Engineering"
    }
  });

  const now = new Date();
  const issuedvc = JSON.stringify({
    id: "http://example.edu/credentials/1872",
    type: ["VerifiableCredential", "AlumniCredential"],
    issuer: "The University of Tokyo",
    issuanceDate: `${now}`,
    credentialSubject: `${claimed}`
  });

  // create a pair of private key and public key (本当はここではないので、後で直す)
  const sk = ed.utils.randomPrivateKey();

  ed.utils.sha512Sync = (...m) => sha512(ed.utils.concatBytes(...m));
  const { getPublicKey,  sign, verify, getExtendedPublicKey } = ed.sync;

  // const pk = getPublicKey(sk);

  // obtain the hashed value of the vc
  const hashedvc = sha512(JSON.stringify(issuedvc));

  // create the signature on the hashedvc
  const signature = sign(hashedvc, sk);


  // もしverifyしたい場合は、
  // const result = verify(signature, hashed message, privatekey)

  // add the proof information
  const now1 = new Date();
  const proofpart =  JSON.stringify({
    type: "RsaSignature2018",
    created: `${now1}`,
    proofPurpose: "assertionMethod",
    verificationMethod: "https://example.edu/issuers/565049#key-1",
    jws: `${signature}`
  });

  const proofedvc = JSON.stringify({
    id: "http://example.edu/credentials/1872",
    type: ["VerifiableCredential", "AlumniCredential"],
    issuer: "The University of Tokyo",
    issuanceDate: `${now}`,
    credentialSubject: `${claimed}`,
    proof: `${proofpart}`
  });

  // メモ　return
  // <p>{JSON.stringify(proofedvc)}</p>
  //JSON.stringify({ --- });

  return (
    <div>
    <p>Please confirm your DID document.</p>
    <p>{proofedvc}</p>
    <Link to={"/Holder2"} state={proofedvc}>
    <button>Confirm</button>
    </Link>
    </div>
  )
}

export default Page5;