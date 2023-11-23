import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/Home'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Forget from '../components/Forget'
import Reset from '../components/Reset'
import Dashboard from '../components/NestedComponents/Dashboard.'
import CashIn from '../components/NestedComponents/CashIn'
import CashOut from '../components/NestedComponents/CashOut'
import Input from '../components/Transaction/Input'
import InitialValue from '../components/Transaction/InitialValue'
import Cash from '../components/Transaction/Cash'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='cashin' element={<CashIn/>}/>
        <Route path='cashout' element={<CashOut/>}/>
        <Route path='input' element={<Input/>}>
          <Route path='I_value' element={<InitialValue/>}/>
          <Route path='cash' element={<Cash/>}/>
        </Route>
      </Route>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/forget' element={<Forget/>}/>
      <Route path='/reset/:id' element={<Reset/>}/>
    </Routes>
  )
}

export default AppRoutes
