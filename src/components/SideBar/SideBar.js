import digitalHouse from '../../assets/images/logo-DH.png';
import { Link } from 'react-router-dom';

function SideBar() {

    return (

        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon">
                    <img className="w-100" src={digitalHouse} alt="Digital House" />
                </div>
            </Link>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - DH movies</span>
                </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Actions</div>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/last">
                    <i className="fas fa-fw fa-bolt"></i>
                    <span>Last Movie</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/genres">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Genres</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/movies">
                    <i className="fas fa-fw fa-table"></i>
                    <span>All Movies</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/search">
                    <i className="fas fa-fw fa-search"></i>
                    <span>Search Movies</span>
                </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />

        </ul>

    )

}

export default SideBar;