import background from '../asset/background.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar (){
    const username = useSelector((state) => state.username.username)
    return(       
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <Link
                    to={"/beranda"}
                    className="navbar-brand"
                    aria-current="page"
                    role='button2'>
                    Welcome to MINI PROJECT {username}
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end text-center flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link
                                    to={"/coba"}
                                    className="nav-link active"
                                    aria-current="page"
                                    role='button1'>
                                    Coba
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">list Data</a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                            <Link
                                to={"/"}
                                className="nav-link active bg-danger"
                                role='button3'>
                                Logout
                            </Link>
                            </li>
                        </ul>
                        {/* <form class="d-flex mt-3" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;