import { Routes, Route } from 'react-router-dom';
import './App.css';
import { FormLogin } from './components/FormLogin';
import { HomePage } from './components/Home.page';
import { Nav } from './components/Nav';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/SuperHeroes.page';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/super-heroes' element={<SuperHeroesPage />} />

        <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />

        <Route path='/form-login' element={<FormLogin />} />

        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
