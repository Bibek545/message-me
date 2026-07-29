import { Route, Routes } from 'react-router-dom'
import DefaultLayout from '../components/layout/DefaultLayout'
import HomePage from '../pages/home/HomePage'
import AboutPage from '../pages/home/AboutPage'
import SignInPage from '../pages/auth/SignInPage'
import LoginPage from '../pages/auth/LoginPage'
import ChatPage from '../pages/chat/ChatPage'
import ArchivedPage from '../pages/chat/menuSideBar/ArchivedPage'
import UserProfile from '../pages/chat/menuSideBar/UserProfile'

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
      <Route path='/dashboard' element={<ChatPage />}>
      </Route>
      <Route path='/archived' element={<ArchivedPage />}></Route>
      <Route path='/profile' element={<UserProfile />}></Route>
    </Routes>
)
}

export default AppRoutes