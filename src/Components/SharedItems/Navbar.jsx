"use client";
import Link from "next/link";
import '../../CSS/font.css'
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
    const pathname = usePathname();

    const navItems = [
        { id: 1, name: "Home", route: "/" },
        { id: 4, name: "Track Nutrition", route: "/track" },
        { id: 8, name: "Shop", route: "/shop" },
        { id: 3, name: "Meal Plans", route: "/meal-plans" },
        { id: 5, name: "Blog", route: "/blog" },
        { id: 6, name: "About", route: "/about" },
        { id: 7, name: "Contact", route: "/contact" }
    ];

  if (pathname.includes('/dashboard') || pathname.includes('/login') || pathname.includes('/signup')) {
  return;
  }
  return (
    <div className="p-1 px-0 md:px-3 w-full z-50 fixed bg-gradient-to-r from-green-100 via-white to-green-100">
      <div className="max-w-7xl mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
            >
              {navItems?.map((nav) => (
                <li key={nav?.id}>
                  <Link
                    href={nav.route}
                    className="text-gray-700 hover:text-green-600 font-medium"
                  >
                    {nav?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-0.5 md:gap-1.5">
            <img className="w-8 md:w-12 h-8 md:h-12 rounded-full" src="/assets/bg-remove-logo.png" alt="logo" />
          <Link
            href="/"
            className="font-palyFair text-2xl md:text-4xl font-bold text-green-600 tracking-wide"
          > 
            Nutryvo
          </Link>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-6 font-palyFair font-medium text-md">
            {navItems?.map((nav) => (
              <li key={nav?.id}>
                <Link
                  href={nav.route}
                  className={`${
                    pathname === nav.route
                      ? "text-green-600"
                      : "text-gray-700"
                  } hover:text-green-600 transition`}
                >
                  {nav?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
           <Link href={'/dashboard/profile'} className="text-green-600 mr-1.5 md:mr-3">
                <FaRegUserCircle className="text-xl md:text-2xl"/>
            </Link>
            <Link href={'/dashboard/cart'} className="text-green-600 mr-1.5 md:mr-3">
                <TiShoppingCart className="text-2xl md:text-3xl"/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
