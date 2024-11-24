import React from 'react'
import Layout from '../../../components/Layout'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './dashboard'
import Dealer from './dealer'
import Dealer_form from './dealer/dealer_form'
import TwoWheelerForm from './two-wheeler/two_form'
import TwoWheeler from './two-wheeler'
import Brand from './brand'
import Brand_form from './brand/brand_form'
import Startups_form from './ev-startups/startups_form'
import StartUps from './ev-startups'
import Profile from './profile'
import ThreeWheeler from './three-wheeler'
import FourWheeler from './four-wheeler'
import { Two_view } from './two-wheeler/two_view'
import THreeWheelerForm from './three-wheeler/three_form'

export default function AdminLayout() {
  return (
    <Layout>

    <div >
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/dealer' element={<Dealer/>} />
        <Route path='/dealer-form' element={<Dealer_form/>} />
        <Route path='/twoWheeler-form' element={<TwoWheelerForm/>} />
        <Route path='/twoWheeler' element={<TwoWheeler/>} />
        <Route path='/twoWheeler-view/:id' element={<Two_view/>} />
        <Route path='/brand' element={<Brand/>} />
        <Route path='/brand-form' element={<Brand_form/>} />
        <Route path='/startUps-form' element={<Startups_form/>} />
        <Route path='/startUps' element={<StartUps/>} />
        <Route path='/threeWheeler' element={<ThreeWheeler/>} />
        <Route path='/threeWheeler-form' element={<THreeWheelerForm/>} />
        <Route path='/fourWheeler' element={<FourWheeler/>} />
      </Routes>
    </div>
    </Layout>
  )
}
