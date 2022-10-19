import React from 'react';
import { useState } from 'react';
import { redirect, useNavigate } from "react-router-dom";

import { database } from "./firebase";
import { ref, push, set, child, update } from "firebase/database";

import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha512';

export const Holder1 = () => {
  const navigate = useNavigate()

  // create the holder's did (temporaly! needed to be refined)
  const createddid = ed.utils.randomPrivateKey();

  // create the holder's private key and public key
  const privateKey = ed.utils.randomPrivateKey();

  ed.utils.sha512Sync = (...m) => sha512(ed.utils.concatBytes(...m));
  const { getPublicKey,  sign, verify, getExtendedPublicKey } = ed.sync;

  const publicKey = getPublicKey(privateKey)

  // update the databse
  const date = new Date();
  const didRef = ref(database, "/dids/" + `${date}`);
  const newdid = JSON.stringify({
    did: `${createddid}`,
    pk: `${publicKey}`,
    sk: `${privateKey}`,
  });
  set(didRef, newdid);


  return (
    <div>
    <p>Your DID is successfully registered.</p>
    <p>Your did: {privateKey}</p>
    <p>Your public key: {publicKey}</p>
    <p>Your private key: {privateKey}</p>
    <p><button onClick={() => navigate('/Page4')}>Next</button></p>
    </div>
  )
}

export default Holder1;