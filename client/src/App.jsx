import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPageUser from './pages/RegisterPageUser';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<h1>Home Page</h1>}/>
          <Route path='/login' element= {<LoginPage/>}/>
          <Route path='/registerUser' element= {<RegisterPageUser/>}/>
          <Route path='/profile' element= {<h1>Profile</h1>}/>
          <Route path='/inicio' element= {<h1>Inicio</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;