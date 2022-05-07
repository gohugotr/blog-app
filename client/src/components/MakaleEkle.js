import React, { useState } from 'react'

export default function MakaleEkle() {

  const [veriler, setVeriler] = useState({
      baslik: '',
      icerik: ''
  });

  const onChange = (e) => {
      setVeriler({ ...veriler, [e.target.name]:e.target.value })
  }

  const onSubmit = (e) => {
      e.preventDefault();
      console.log(veriler);
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
