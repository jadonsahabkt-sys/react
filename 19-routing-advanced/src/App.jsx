import React from 'react'
import Navbar from './components/Navbar'
import Nav2 from './components/Nav2'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kid from './pages/Kid'
import Courses from './pages/Courses'
import CoursesDetail from './pages/CoursesDetail'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Nav2/>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/courses/:coursesId' element={<CoursesDetail/>}/>
            <Route path='/product' element={<Product/>}>
               <Route path='men' element={<Men/>}/> 
               <Route path='women' element={<Women/>}/>    
                <Route path='kid' element={<Kid/>}/>             
            </Route>
            <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
App