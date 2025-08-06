import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './components/RootLayout/RootLayout'
import Admin from './components/Admin/Admin'
import Login from './components/Login/Login'
import OTP from './components/OTP/OTP'

function App() {
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='/otp' element={<OTP/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route/>
        <Route/>
        <Route/>
      </Route>
    )
   )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
