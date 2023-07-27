import { Outlet, Link } from "react-router-dom";
import "../pages/Layout.css"

const Layout = () => {
    return (
        <>
            <div className="container p-5 layout">
                <h1 className="head">Mini Projects</h1>
                <ul>
                    <li>
                        <Link to="/carousel" className="list">Carousel</Link>
                    </li>
                    <li>
                        <Link to="/accordian" className="list">Accordian</Link>
                    </li>
                    <li>
                        <Link to="/quote-generator" className="list">Quote Generator</Link>
                    </li>
                    <li>
                        <Link to="/todo" className="list">To Do List</Link>
                    </li>
                </ul>
            </div>

            <Outlet />
        </>
    )
};

export default Layout;