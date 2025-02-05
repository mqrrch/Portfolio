export default function Navbar(){
    return(
        <div id="navbar" className="p-4 flex justify-end">
            <div className="space-x-4 text-white">
                <a className="nav-brands-container">
                    <i className="fa-brands fa-linkedin nav-brands text-2xl"></i>
                </a>
                <a className="nav-brands">
                    <i className="fa-brands fa-square-github nav-brands text-2xl"></i>
                </a>
            </div>
        </div>
    )
}