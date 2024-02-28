import logo from './logo.svg';
import About from './routcomponents/About';
import Contact from './routcomponents/Contact';
import Home from './routcomponents/Home';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import User from './routcomponents/User';
import OldBooks from './routcomponents/OldBooks';
import NewBooks from './routcomponents/NewBooks';
import Login from './routcomponents/Login';
import Dashboard from './routcomponents/Dashboard';


function Router() {
    return (
        <div className="Router">
           
            <BrowserRouter>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/User/1'>User 1</Link></li>
                <li><Link to='/User/2'>User 2</Link></li>
                <li><Link to='/Books-type/Old_Books'>Old Books</Link></li>
                <li><Link to='/Books-type/New_Books'>New Books</Link></li>
                <li><Link to='/login'>Login</Link></li>






            </ul>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/User/:id' element={<User/>} />
                    <Route path='/Books-type'>
                        <Route path='Old_Books' element={<OldBooks/>} />
                        <Route path='New_Books' element={<NewBooks/>} />
                    </Route>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/Dashboard' element={<Dashboard/>}/>


                    




                </Routes>
            
            </BrowserRouter>
         


        </div>

    )
}

export default Router;