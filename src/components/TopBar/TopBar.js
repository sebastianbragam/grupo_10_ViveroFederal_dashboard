function TopBar() {

    return (

        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">

                <h1 className="h3 mb-0 text-gray-800">Dashboard - Vivero Federal</h1>

            </ul>

        </nav>

    )

}

export default TopBar;