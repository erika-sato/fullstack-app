// ROTAS DA APLICAÇÃO
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { ProductsDetail } from '../pages/Products/[...slug]';


function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductsDetail />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}

export default AppRouter;