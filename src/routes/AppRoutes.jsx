import {Routes,Route} from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Skills from '../pages/Skills';
import Resume from '../pages/Resume';
import Education from '../pages/Education';
import Contact from '../pages/Contact';


const AppRoutes = () =>{
    return (
        <Routes>
            <Route element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/skills' element={<Skills/>} />
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/contact' element={<Contact/>}/>
            </Route>



           
        </Routes>
    )
}

export default AppRoutes