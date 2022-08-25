import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

// LAYOUTS
import BarraSuperior from './layout/BarraSuperior';
import BarraImportantes from './layout/BarraImportantes';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Error from './layout/Error';

// PAGINAS
import Inicio from "./pages/Inicio";
import ProductoDetalle from './pages/ProductoDetalle';
import Categoria from './pages/Categoria';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<BarraSuperior />
		<BarraImportantes />
		<Header />
		<Routes>
			<Route path="/" element={<Inicio />} />
			<Route path="/categoria/:slug" element={<Categoria />} />
			<Route path="/producto/:slug" element={<ProductoDetalle />} />
			<Route path="*" element={<Error />} />
		</Routes>
		<Footer />
	</BrowserRouter>
);
	
