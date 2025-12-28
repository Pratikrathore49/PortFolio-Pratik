import {Routes,Route} from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Skills from '../pages/Skills';


const AppRoutes = () =>{
    return (
        <Routes>
            <Route element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/skills' element={<Skills/>} />
          
            </Route>



           
        </Routes>
    )
}

export default AppRoutes