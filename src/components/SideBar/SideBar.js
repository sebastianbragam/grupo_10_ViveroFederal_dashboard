import viveroFederal from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function SideBar() {

    return (

        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center logo" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src={viveroFederal} alt="Vivero Federal" />
                </div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - Vivero Federal</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Acciones</div>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/lastProduct">
                    <i className="fas fa-fw fa-seedling"></i>
                    <span>Último producto</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/categories">
                    <i className="fas fa-fw fa-bars"></i>
                    <span>Productos por categoría</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/allProducts">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Todos los productos</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/search">
                    <i className="fas fa-fw fa-search"></i>
                    <span>Buscar productos</span>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

        </ul>

    )

}

export default SideBar;