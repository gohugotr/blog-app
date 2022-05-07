import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { gql, useQuery, useMutation } from '@apollo/client'

const MAKALE_GETIR = gql`
  query makaleGetir($id: ID!) {
    makaleGetir(id: $id) {
      id
      baslik
      icerik
    }
  }
`

const MAKALE_SIL = gql`
  mutation makaleSil($id: ID!) {
    makaleSil(id: $id)
  }
`

export default function MakaleDetay(props) {
  //console.log(props);
  let { id } = useParams()

  const { data, loading, error } = useQuery(MAKALE_GETIR, {
    variables: { id },
  })

  const [silMakale] = useMutation(MAKALE_SIL)

  const onClick = () => {
    // console.log(id);
    silMakale({ variables: { id } })
    //window.location ='/' // sayfa hem yönlendirilip, hem de yenileniyor.
  }

  if (loading) {
    ;<p>Makaleler yükleniyor</p>
  }
  if (error) {
    ;<p>`Makaleler ${error}`</p>
  }

  return (
    <div>
      {data && (
        <div className='detay content'>
          <h2>{data.makaleGetir.baslik}</h2>
          <div className='content'>{data.makaleGetir.icerik}</div>
          <NavLink className='sil' reloadDocument={true} to='/' onClick={onClick}>
            Sil
          </NavLink>
          {/* reloadDocument={true} sayfa hem yönlendirilip, hem de yenileniyor.  */}
        </div>
      )}
    </div>
  )
}
