import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Category from './pages/Category/Category';
import NotFound from './pages/NotFound/NotFound';
import Recipe from './pages/Recipe/Recipe';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main className='container content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/contacts' element={<Contact/>} />
                        <Route path='/category/:name' element={<Category/>} />
                        <Route path='/meal/:id' element={<Recipe/>} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;