export default function Navbar(){
    return(
        <div className="p-4 flex justify-end">
            <div className="space-x-4 text-white">
                <a className="nav-brands">
                    <i className="fa-brands fa-linkedin text-2xl"></i>
                </a>
                <a className="nav-brands">
                    <i className="fa-brands fa-square-github text-2xl"></i>
                </a>
            </div>
        </div>
    )
}