import React from 'react';


function Footer() {
    return (
        <>
		<footer className="footer" id="pie">
				<div >
					<article>
					
								<h6>NUESTRAS REDES SOCIALES</h6>
								<div className="social">
									<ul>
										<li className="socialItem"><a href="https://facebook.com"target="_blank" rel="noopener noreferrer" aria-label="fecebook"><i class="fa-brands fa-facebook"></i></a></li>
										<li className="socialItem"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="twitter"><i class="fa-brands fa-twitter"></i></a>
										</li>
										<li className="socialItem"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="instagram"><i class="fa-brands fa-instagram"></i></a>
										</li>
										<li className="socialItem"><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="youtube"><i class="fa-brands fa-youtube"></i></a>
										</li>
									</ul>
								</div>
					</article>
				</div>
				<div  className="copy">
					copyright 2022
				</div>			
		</footer>
        </>
    );
}

export default Footer;