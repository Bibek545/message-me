import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../components/layout/DefaultLayout'
import HomePage from '../pages/home/HomePage'
import AboutPage from '../pages/home/AboutPage'
import SignInPage from '../pages/auth/SignInPage'
import LoginPage from '../pages/auth/LoginPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/register' element={<SignInPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
      </Route>
    </Routes>
)
}

export default AppRoutes