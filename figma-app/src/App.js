import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Manifest from './pages/Manifesto';
import Team from './pages/Team';
import News from './pages/News';
import Jobs from './pages/Jobs';
import Aboutus from './pages/Aboutus';
import PagenotFound from './pages/PagenotFound';

function App() {
  return (
    <div>
     
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Manifest/>}/>
      <Route path="/Team" element={<Team/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/Jobs" element={<Jobs/>}/>
      <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path='*' element={<PagenotFound/>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
