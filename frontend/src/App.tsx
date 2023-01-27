import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/index.jsx';
import { ProductContext } from './contexts/ProductContext';
import { ProductProps } from './hooks/useProducts.js';

import AppRouter from './routes';

function App() {
  const [product, setProduct] = useState<ProductProps | null>(null);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </ProductContext.Provider>
  )
}

export default App