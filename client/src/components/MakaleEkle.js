import React, { useState } from 'react'
import {gql, useMutation} from "@apollo/client";

const MAKALE_EKLE = gql`

    mutation makaleEkle($baslik: String!, $icerik: String!){
      makaleOlustur(baslik:$baslik, icerik:$icerik){
        id, baslik, icerik
      }
    }
`;

export default function MakaleEkle() {

  const [veriler, setVeriler] = useState({
      baslik: '',
      icerik: ''
  });

  const [makaleEkle, {loading}] = useMutation(MAKALE_EKLE,{
    update(proxy, sonuc){
      console.log(sonuc);
    },
    variables: veriler
  })

  const onChange = (e) => {
      setVeriler({ ...veriler, [e.target.name]:e.target.value })
  }

  const onSubmit = (e) => {
      e.preventDefault();
      //console.log(veriler);
      makaleEkle();
      window.location = '/';
  }

  return (
    <div className='makale-olustur'>
      <form onSubmit={onSubmit}>
        <label htmlFor='baslik'>Makale Başlık:</label>
        <input type='text' id='baslik' name='baslik' onChange={onChange}></input>
        <label htmlFor='icerik'>Makale İçeriği:</label>
        <textarea type='text' id='icerik' name='icerik' onChange={onChange}></textarea>
        <button>Kaydet</button>
      </form>
    </div>
  )
}
