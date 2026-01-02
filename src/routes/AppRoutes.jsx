import {Routes,Route} from 'react-router';
import MainLayout from '../layouts/MainLayout';
import {lazy,Suspense} from 'react';
import Loader from '../components/Loader';

const Home = lazy(()=>import('../pages/Home'))
const Skills = lazy(()=>import('../pages/Skills'))
const Resume = lazy(()=>import('../pages/Resume'))
const Education = lazy(()=>import('../pages/Education'))
const Contact = lazy(()=>import('../pages/Contact'))


const AppRoutes = () =>{
    return (<>  
     <Suspense fallback={<Loader/>} >
        <Routes>
            <Route element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/skills' element={<Skills/>} />
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/contact' element={<Contact/>}/>
            </Route>


           
        </Routes>
      </Suspense>
        </>
  
    )
}

export default AppRoutes