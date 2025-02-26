import "./Navbar.css"

export function Navbar(){
    return(
        <dev className="navbar-container">
            <div>
                <img src="./public\vite.svg" alt="img" />
            </div>

            <div className="Nav-icon">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>
        </dev>
    )
}