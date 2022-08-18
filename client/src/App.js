import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
// import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Login from './pages/login/LoginController'
import Layout from './layout/Layout';

function App() {
  const user = useSelector((state) => state.authReducer.authData)
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/' element={user ? <Navigate to = 'home'/> : <Navigate to = 'login'/>} />
          <Route path='/home' element={user ? <Home/> : <Navigate to = '../login' />} />
          <Route path='/login' element={user ? <Navigate to = '../home' /> : <Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
