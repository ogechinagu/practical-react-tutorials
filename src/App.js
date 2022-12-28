import { Routes, Route } from 'react-router-dom';
import './App.css';
import { FormLogin } from './components/Formik/FormLogin';
import { HomePage } from './components/Home.page';
import { Nav } from './components/Nav';
import { RQSuperHeroesPage } from './components/ReactQuery/RQSuperHeroes.page';
import { SuperHeroesPage } from './components/ReactQuery/SuperHeroes.page';

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
