import './App.css';
import MakaleEkle from './components/MakaleEkle';
import MakaleListesi from './components/MakaleListesi'
import Baslik from './components/Baslik'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
      // const Ekle = () => {
      //   let { id } = useParams()
      //   return <h3>Sil: {id}</h3>
      // }

      const Error = () =>{
        return <h3>404 Hata. Sayfa bulunamadı.</h3>
      }
  return (
    <Router>
      <div className='App'>
        <Baslik/>
        <Routes>
          <Route path='/' exact element={<MakaleListesi />} />
          <Route path='/ekle' element={<MakaleEkle />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
