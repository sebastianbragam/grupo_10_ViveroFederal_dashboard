import './assets/css/app.css';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

function App() {

    return (

        <div id="wrapper">

            <SideBar />

            <div id="content-wrapper" className="d-flex flex-column">

                <div id="content">

                    <TopBar />
                    <Content />

                </div>

                <Footer />

            </div>

        </div>


    );

}

export default App;
