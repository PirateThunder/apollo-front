import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/Users';
import Auth from './pages/Auth';

const isAuth = false

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {isAuth && <Route path="*" element={<Users />} />}
        {!isAuth && <Route path="*" element={<Auth />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;