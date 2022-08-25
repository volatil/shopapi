import React from 'react';
// IMAGENES
import imgLoading from "assets/imagenes/loading.gif";

import 'components/Loading/loading.css';

function Loading () {

	return ( 
		<section className="loadinggggg">
			<img src={imgLoading} alt="Loading ..." />
		</section> 
	);
	
};

export default Loading;