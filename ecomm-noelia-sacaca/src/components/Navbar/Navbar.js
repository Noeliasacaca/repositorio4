import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';
function Navbar() {
    return (
        <>
		<nav class="navbar navbar-expand-lg bg-colorNav sticky-top botonera"  id="botonera" >
			<div class="container-fluid">
				<NavLink class="navbar-brand" to='/inicio'>KUMOO</NavLink> 
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="item">
							<NavLink className="nav-link active animate__animated animate__bounceInLeft" aria-current="page" to='/inicio'>INICIO</NavLink>
						</li>
						<li class="item">
							<NavLink className="nav-link animate__animated animate__bounceInLeft" to='/'>PROMOCIONES</NavLink>
						</li>
						<li class="item">
							<NavLink className="nav-link animate__animated animate__bounceInLeft" aria-current="page" to='/'>NUESTROS PRODUCTOS</NavLink>
						</li>
                        <li class="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle animate__animated animate__bounceInLeft" to='/categoria' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                CATEGORIA
                            </NavLink>
                            <ul class="dropdown-menu">
                                <li><NavLink className="dropdown-item" to='/categoria/sahuemerios'>SAHUMERIOS</NavLink></li>
                                <li><NavLink className="dropdown-item" to='/categoria/ceniceros'>CENICEROS </NavLink></li>
                                <li><NavLink className="dropdown-item" to='/categoria/teteras'>TETERAS</NavLink></li>
                            </ul>
                        </li>
						<li class="item">
						<NavLink className='icon nav-link animate__animated animate__bounceInLeft socialItem' to='/'><CartWidget /></NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
            </>
    );
}

export default Navbar;