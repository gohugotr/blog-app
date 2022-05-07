import React from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const MAKALE_GETIR = gql`

    query makaleGetir($id: ID!){
      makaleGetir(id:$id){
        id,
        baslik,
        icerik
      }
    }
`

export default function MakaleDetay(props) {
   //console.log(props); 
   let { id} = useParams();

  const { data, loading, error } = useQuery(MAKALE_GETIR,{
      variables: {id}
  })

 

  if (loading) {
    <p>Makaleler yükleniyor</p>
  } 


  return (
      <div>
            {
                data && (
                    <div className='detay content'>
                        <h2>{data.makaleGetir.baslik}</h2>
                        <div className='content'>
                            {data.makaleGetir.icerik}
                        </div>
                        <NavLink className="sil" to="">Sil</NavLink>
                    </div>
                )
            }
    </div>
  )
}
