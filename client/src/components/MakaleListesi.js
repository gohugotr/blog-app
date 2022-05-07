import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const MAKALELER_GETIR = gql`
  query makalelerGetir {
    makalelerGetir {
      id
      baslik
      icerik
    }
  }
`

export default function MakaleListesi() {
  
  const { data, loading, error } = useQuery(MAKALELER_GETIR)

  let makaleTemp;

  if (loading){
    makaleTemp = <p>Makaleler yükleniyor</p>
  } else if (data){
    makaleTemp = data.makalelerGetir.map(makale => {
      return (
        <div key={makale.id} className='makaleler'>
          <Link to={`/makale/${makale.id}`}> {makale.baslik}</Link>
        </div>
      )
    })
  }

  return (
    <div>
        {   
          makaleTemp
        }
    </div>
  )
}
