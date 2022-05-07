import './App.css';
import MakaleEkle from './components/MakaleEkle';
import MakaleListesi from './components/MakaleListesi'
import Baslik from './components/Baslik'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ApolloClient from "apollo-boost"
import {ApolloProvider} from '@apollo/react-hooks'


const client = new ApolloClient({
  uri:'http://localhost:4000/'
})

function App() {
      // const Ekle = () => {
      //   let { id } = useParams()
      //   return <h3>Sil: {id}</h3>
      // }

      const Error = () =>{
        return <h3>404 Hata. Sayfa bulunamadı.</h3>
      }
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App'>
          <Baslik />
          <Routes>
            <Route path='/' exact element={<MakaleListesi />} />
            <Route path='/ekle' element={<MakaleEkle />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
