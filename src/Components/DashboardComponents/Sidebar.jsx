"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { MdRestaurantMenu, MdOutlineManageAccounts } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery, TbActivityHeartbeat } from "react-icons/tb";
import { PiArrowCircleDownRightDuotone, PiNotePencilDuotone } from "react-icons/pi";
import { useAuth } from "@/app/hooks/useAuth";

const Routes = [
  {
    id: 1,
    label: "Dashboard",
    icon: <LuLayoutDashboard />,
    link: "/dashboard/overview",
  },
  {
    id: 2,
    label: "My Profile",
    icon: <FaUserCircle />,
    link: "/dashboard/profile",
  },
  {
    id: 3,
    label: "Meal Planner",
    icon: <MdRestaurantMenu />,
    link: "/dashboard/meal-planner",
  },
  {
    id: 4,
    label: "My Nutrition",
    icon: <TbActivityHeartbeat />,
    link: "/dashboard/nutrition",
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
  {
    id: 7,
    label: "Admin Panel",
    icon: <MdOutlineManageAccounts />,
    link: "/dashboard/admin",
  },
  {
    id: 8,
    label: "Feedback",
    icon: <PiNotePencilDuotone />,
    link: "/dashboard/feedback",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { signOut } = useAuth()

  return (
    <div className="p-4 bg-[#f7faf7] min-h-screen shadow-md">
      {/* Logo */}
      <div className="text-center border-b border-gray-300 pb-4">
        <Link
          href="/"
          className="text-3xl font-extrabold text-green-600 tracking-wide hover:text-green-500 transition"
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
            className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium transition duration-200 border border-green-300 ${
              pathname === route.link
                ? "bg-green-100 text-green-600 shadow-md"
                : "text-gray-700 hover:"
            }`}
          >
            <span className="text-xl">{route.icon}</span>
            <span>{route.label}</span>
          </Link>
        ))}

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="border border-green-300 flex items-center gap-3 px-5 py-3 rounded-xl text-gray-700 font-medium w-full hover:bg-red-100 hover:text-red-600 hover:border-0 transition duration-200 cursor-pointer"
        >
          <CiLogout className="text-xl" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
