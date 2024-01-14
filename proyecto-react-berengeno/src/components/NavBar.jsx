import CartWidget from "./CartWidget";
import LogoArena from "./LogoArena";

const NavBar = () => {
    return(
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <LogoArena tamano={100} />
                </div>
                <div className="col-md-10 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Todos los libros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Promociones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Sucursales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Packs</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;