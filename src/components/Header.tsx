import logo from "../assets/header-logo.png";

function Header() {
  return (
    <header className="w-full shadow-sm fixed z-50">
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto flex justify-around items-center">
          <span className="text-sm text-gray-600 mr-[90px]">
            Delivering Values, Since 2015
          </span>
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span>
              <i className="fa-solid fa-location-dot"></i> Kathmandu, Nepal
            </span>
            <span>
              <i className="fa-solid fa-phone"></i> +977 9860 484 858
            </span>
            <div className="flex items-center space-x-3">
              <p>Find Us on</p>
              <a
                href="#"
                aria-label="Facebook"
                className="text-blue-600 text-lg"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-pink-600 text-lg"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-green-600 text-lg"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src={logo} alt="Technorio" className="h-10 ml-[120px]" />
          <div className="flex justify-between w-[600px] mr-[100px]">
            <nav className="flex space-x-8 text-gray-700 mt-2">
              <a href="#" className="relative group">
                Home
                
              </a>
              <a href="#">Services</a>
              <a href="#">Solutions</a>
              <a href="#">About Us</a>
              <a href="#">Career</a>
            </nav>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Contact Us</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
