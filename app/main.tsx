import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home/home'
import { ProductListings } from './pages/home/product-listings/product-listings-grid'

import "@reach/dialog/styles.css";
import './styles/index.css'

export function App() {
    return (
        // <Home />
        <ProductListings/>
    )
}

const root = ReactDOM.createRoot(
    document.getElementById('root')!
)
root.render(<App />)
