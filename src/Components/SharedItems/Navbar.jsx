"use client";
import Link from "next/link";
import '../../CSS/font.css'
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session, status } = useSession();

    const pathname = usePathname();

    const navItems = [
        { id: 1, name: "Home", route: "/" },
        { id: 3, name: "Meal Plans", route: "/meal-plans" },
        { id: 4, name: "Track Nutrition", route: "/track" },
        { id: 5, name: "Blog", route: "/blog" },
        { id: 6, name: "About", route: "/about" },
        { id: 7, name: "Contact", route: "/contact" }
    ];


  return (
    <div className="p-1 w-full z-50 fixed shadow bg-white">
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
          <Link
            href="/"
            className="font-palyFair text-4xl font-bold text-green-600 tracking-wide"
          >
            Nutryvo
          </Link>
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
                      : "text-gray-600"
                  } hover:text-green-600 transition`}
                >
                  {nav?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          {
            status === "loading" ?
            <><span className="loading loading-dots loading-md text-success"></span></> 
            :
            <>
            {
             session ? 
             <> 
               <Link href={'/dashboard/profile'} className="btn bg-green-500 text-white hover:bg-green-600 transition px-5 rounded-full font-semibold">Profile</Link>
             </>
             :
            <Link href={'/login'} className="btn bg-green-500 text-white hover:bg-green-600 transition px-5 rounded-full font-semibold">
                Join Us
            </Link>
            }
            </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
