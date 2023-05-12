import viveroFederal from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function SideBar() {

    return (

        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center logo" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src={viveroFederal} alt="Vivero Federal" />
                </div>
            </Link>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Acciones</div>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/lastProduct">
                    <i className="fas fa-fw fa-seedling sidebar-item"></i>
                    <span>Último producto</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/categories">
                    <i className="far fa-fw fa-list-alt sidebar-item"></i>
                    <span>Productos por categoría</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/allProducts">
                    <i className="fas fa-fw fa-table sidebar-item"></i>
                    <span>Todos los productos</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/search">
                    <i className="fas fa-fw fa-search sidebar-item"></i>
                    <span>Buscar productos</span>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

        </ul>

    )

}

export default SideBar;