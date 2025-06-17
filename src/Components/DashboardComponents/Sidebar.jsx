"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";
import { useAuth } from "@/app/hooks/useAuth";
import { FaUsers } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import useUserData from "@/app/hooks/useUserData";

const Routes = [
  {
    id: 1,
    label: "Overview",
    icon: <LuLayoutDashboard />,
    link: "/dashboard/overview",
  },
  {
    id: 2,
    label: "My Profile",
    icon: <FaUserCircle />,
    link: "/dashboard/profile",
  },
  
];

const adminRoutes = [
  {
    id: 1,
    label: "All User",
    icon: <FaUsers/>,
    link: "/dashboard/users",
  },
  {
    id: 2,
    label: "Add Product",
    icon: <MdOutlineAddCircleOutline/>,
    link: "/dashboard/add-product",
  },
  {
    id: 3,
    label: "Pending Orders",
    icon: <MdOutlinePendingActions/>,
    link: "/dashboard/pending-orders",
  },
]

const userRoutes = [

  {
    id: 3,
    label: "Meal Planner",
    icon: <MdRestaurantMenu />,
    link: "/dashboard/meal-planner",
  },
  {
    id: 4,
    label: "My Cart",
    icon: <TiShoppingCart/>,
    link: "/dashboard/cart",
  },
  {
    id: 5,
    label: "My Orders",
    icon: <IoFastFoodOutline />,
    link: "/dashboard/orders",
  },
  {
    id: 6,
    label: "Delivery Tracker",
    icon: <TbTruckDelivery />,
    link: "/dashboard/delivery-tracker",
  },
]

const Sidebar = () => {
  const pathname = usePathname();
  const { signOut } = useAuth()
  
  const { singleUser } = useUserData()
 
  
  return (
    <div className="p-4 bg-[#f7faf7] min-h-screen shadow-md">
      {/* Logo */}
      <div className="text-center border-b border-gray-300 pb-4">
        <Link
          href="/"
          className="text-3xl font-bold text-green-600 tracking-wide hover:text-green-500 transition"
        >
          Nutryvo
        </Link>
      </div>

      {/* Navigation */}
      <div className="py-4 space-y-3 text-sm">
        {Routes.map((route) => (
          <Link
            key={route.id}
            href={route.link}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition duration-200 border border-green-200 ${
              pathname === route.link
                ? "bg-green-100 text-green-600 shadow-md border-0"
                : "text-gray-700 hover:bg-green-100 hover:border-0"
            }`}
          >
            <span className="text-xl">{route.icon}</span>
            <span>{route.label}</span>
          </Link>
        ))}
         {
           singleUser?.role === "member" 
           ?
           <>
            {userRoutes.map((route) => (
            <Link
              key={route.id}
              href={route.link}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition duration-200 border border-green-200 ${
                pathname === route.link
                  ? "bg-green-100 text-green-600 shadow-md border-0"
                  : "text-gray-700 hover:bg-green-100 hover:border-0"
              }`}
            >
              <span className="text-xl">{route.icon}</span>
              <span>{route.label}</span>
            </Link>
          ))}
           </>
           :
           <></>
         }

         {
           singleUser?.role === "admin" 
           ?
           <>
           {adminRoutes.map((route) => (
            <Link
              key={route.id}
              href={route.link}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition duration-200 border border-green-200 ${
                pathname === route.link
                  ? "bg-green-100 text-green-600 shadow-md border-0"
                  : "text-gray-700 hover:bg-green-100 hover:border-0"
              }`}
            >
              <span className="text-xl">{route.icon}</span>
              <span>{route.label}</span>
            </Link>
          ))}
           </>
           :
           <></>
         }

        <Link
              
              href={'/'}
              className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition duration-200 border border-green-200 text-gray-700 hover:bg-green-100 hover:border-0`}
            >
              <span className="text-xl"><FaHome/></span>
              <span>Home</span>
          </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="border border-green-200 flex items-center gap-3 px-5 py-3 rounded-xl text-gray-700 font-medium w-full hover:bg-red-100 hover:text-red-600 hover:border-0 transition duration-200 cursor-pointer"
        >
          <CiLogout className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
