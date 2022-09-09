import React from 'react';
import CartWidget from './CartWidget';
function Navbar() {
    return (
        <>
		<nav class="navbar navbar-expand-lg bg-colorNav sticky-top botonera"  id="botonera" >
			<div class="container-fluid">
				<a class="navbar-brand" href="index.html">KUMOO</a> 
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="item">
							<a className="nav-link active animate__animated animate__bounceInLeft" aria-current="page" href="#">INICIO</a>
						</li>
						<li class="item">
							<a className="nav-link animate__animated animate__bounceInLeft" href="#">PROMOCIONES</a>
						</li>
						<li class="item">
							<a className="nav-link animate__animated animate__bounceInLeft" aria-current="page" href="#">NUESTROS PRODUCTOS</a>
						</li>
                        <li class="nav-item dropdown">
                            <a className="nav-link dropdown-toggle animate__animated animate__bounceInLeft" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CATEGORIA
                            </a>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="#">SAHUMERIOS</a></li>
                                <li><a className="dropdown-item" href="#">CENICEROS</a></li>
                                <li><a className="dropdown-item" href="#">TETERAS</a></li>
                            </ul>
                        </li>
						<li class="item">
						<a className='icon nav-link animate__animated animate__bounceInLeft socialItem' href='#'><CartWidget /></a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
            </>
    );
}

export default Navbar;