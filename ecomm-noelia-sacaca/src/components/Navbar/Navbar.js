import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">KUUMO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li class="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link" href="#">PROMOCIONES</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CATEGORIA
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">SAHUMERIOS</a></li>
                                    <li><a className="dropdown-item" href="#">CENICEROS</a></li>
                                    <li><a className="dropdown-item" href="#">TETERAS</a></li>
                                </ul>
                            </li>
                        </ul>
                </div>
        </div>
            </nav >
        </div >
    );
}

export default Navbar;