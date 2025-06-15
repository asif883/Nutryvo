import Sidebar from "@/Components/DashboardComponents/Sidebar";
import { RiMenu2Line } from "react-icons/ri";


export const metadata = {
    title: "Dashboard - Nutryvo",
    description: "Manage orders, products, and settings in the Nutryvo dashboard.",
    icons: "/assets/nutryvo.logo.png",
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        
        {/* Main Content */}
        <div className="drawer-content  p-6 w-full">
         <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
             <RiMenu2Line  className="mb-4" size={24}/>
          </label>
          {children}
          
        </div>
  
        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="min-h-full w-80 ">
             <Sidebar/>
          </ul>
        </div>
      </div>
    );
  }
  