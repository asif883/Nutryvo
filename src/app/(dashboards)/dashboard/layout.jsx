"use client"
import useUserData from "@/app/hooks/useUserData";
import Sidebar from "@/Components/DashboardComponents/Sidebar";
import Loading from "@/Components/SharedItems/Loading";
import { RiMenu2Line } from "react-icons/ri";


  
  export default function DashboardLayout({ children }) {
    const {loading} = useUserData()
    return (
        <div>
          {
              loading ?
              <><Loading/></>
              :
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
          }
        
        </div>
    );
  }
  