import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Menu = () => {
  return (
    <>
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 bg-gray-100 pb-3">
        <div className="col-span-1">
          <ul className="flex items-center justify-center mt-3">
            <li className="text-2xl">
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li className="ml-3 mr-2 font-bold ">
              <a href="tel:+91 9893679968">CONTACT US</a>
            </li>
            <li className="m-3">
              <input
                type="text"
                placeholder="Enter Product"
                className="px-3 py-1 rounded border border-gray-100 text-slate-500 placeholder:text-slate-300 text-center focus:border-gray-300 outline-none"
              />
              <button className="bg-yellow-300 px-2 py-1 text-white rounded border border-yellow-200">
                Search
              </button>
            </li>
          </ul>
        </div>

        <div className="col-span-1">
          <ul className="flex items-center justify-center mt-3">
            <li className="m-3 font-bold"> <Link to="/profile">My Profile</Link></li>

            
              <li>
              <Link to="/cart">
                <button className="m-3 bg-yellow-300 text-white border border-yellow-200 rounded px-2 py-1">
                  Add To Cart(0)
                </button>
                </Link>
              </li>
            

            <li className="m-3 font-bold">LogIn</li>
          </ul>
        </div>
      </div>
      <hr className="mb-3" />
    </>
  );
};

export default Menu;
