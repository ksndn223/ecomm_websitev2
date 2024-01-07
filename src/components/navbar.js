import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
       

        <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
            <div className="container">
            <a class="navbar-brand">
                <img className='img-fluid' src="imgs/delltech_logo.png" class="img-fluid" alt="logo"/>
            </a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/Home" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link className="nav-link active" to="/About">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Products">Products</Link>
                      </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Gallery">Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Login">Login</Link>
                    </li>
                  </ul> 

                  </div> 
                </div>            
           
        </nav>

    
     );
}
 
export default Navbar;
