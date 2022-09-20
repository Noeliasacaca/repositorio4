import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <>
		<nav class="navbar navbar-expand-lg bg-colorNav sticky-top botonera"  id="botonera" >
			<div class="container-fluid">
				<Link class="navbar-brand" to='/'>KUMOO</Link> 
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="item">
							<Link className="nav-link active animate__animated animate__bounceInLeft" aria-current="page" to='/'>INICIO</Link>
						</li>
						<li class="item">
							<Link className="nav-link animate__animated animate__bounceInLeft" href="#">PROMOCIONES</Link>
						</li>
						<li class="item">
							<Link className="nav-link animate__animated animate__bounceInLeft" aria-current="page" href="#">NUESTROS PRODUCTOS</Link>
						</li>
                        <li class="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle animate__animated animate__bounceInLeft" to='/categoria' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CATEGORIA
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link className="dropdown-item" to='/categoria/sahuemerios'>SAHUMERIOS</Link></li>
                                <li><Link className="dropdown-item" to='/categoria/ceniceros'>CENICEROS </Link></li>
                                <li><Link className="dropdown-item" to='/categoria/teteras'>TETERAS</Link></li>
                            </ul>
                        </li>
						<li class="item">
						<Link className='icon nav-link animate__animated animate__bounceInLeft socialItem' href='#'><CartWidget /></Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
            </>
    );
}

export default Navbar;