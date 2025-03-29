import './App.css';
import Layout from '../src/components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* Autres routes seront ajoutées ici */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
