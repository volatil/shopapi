function Test({ data } = {}) {
	console.log( data )
	return(
		data?.map((p) => {
			let testsss = p.z.modelo;
			console.log( "asd" );
			console.log( testsss );
			return(
				<div className="producto" key={ p.z.id  }>
					<a href="#nada">
						<div className="imagen">
							{
								p.z.imagen() ? 
									<img src={ p.z.imagen() } alt={ p.z.modelo } />
								: ""
							}
						</div>
						<h4>{ p.z.modelo }</h4>
						<h4>{ p.z.marca }</h4>
						<p className="precio">{ p.z.precio ? `$ ${p.z.precio}` : "" }</p>
						<p className="tallas">{ p.z.tallas }</p>
					</a>
				</div>
			)
		})
	)
}
export default Test;