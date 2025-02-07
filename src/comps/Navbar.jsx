export default function Navbar(){
    return(
        <div id="navbar" className="p-4 2xl:p-6 2xl:px-8 flex justify-end">
            <div className="space-x-3 xl:space-x-5 2xl:space-x-8 text-white">
                <a className="nav-link">
                    <i className="fa-brands fa-linkedin nav-brands"></i>
                </a>
                <a className="nav-link">
                    <i className="fa-brands fa-square-github nav-brands"></i>
                </a>
            </div>
        </div>
    )
}