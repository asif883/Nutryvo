"use client"
import useUserData from '@/app/hooks/useUserData';
import React, { useEffect, useState } from 'react';
import { RiAdminLine } from 'react-icons/ri';
import { TiUserDeleteOutline } from 'react-icons/ti';
import Loading from '@/Components/SharedItems/Loading';

const page = () => {
    const {singleUser} = useUserData()
    const [users , setUsers] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('/api/user')
            const data = await res.json()
            setUsers(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <div className='w-full'>
         {
            loading ? <><Loading/></>
            :
            <>
             {
                singleUser?.role !== "admin" ?
                <div className='flex items-center justify-center min-h-screen'>
                    <h1 className='text-red-600 font-semibold text-2xl'>Only Admin Can Access The Users</h1>
                </div>
                :
              <table className="table w-full">     
                <thead>
                    <tr className="bg-gray-100 font-bold text-lg">
                    <th>SL.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Make Admin</th>
                    <th>Delete user</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users?.map((user, idx)=> 
                        
                        <tr key={idx} >
                        <th>
                                <label>
                                {idx+1}
                                </label>
                            </th>
                        <th>
                            <label>
                            {user?.name}
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                            <div className="avatar">
                                <p>{user?.email}</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="capitalize">{user?.role}</p>
                        </td>
                        <td>
                            <button
                              className="btn btn-ghost btn-xs"
                              disabled={user.role === "admin"}     
                            >
                                
                                <RiAdminLine size={24}/>
                            </button>
                            
                        </td>
                        <th>
                            <button
                                 className="btn btn-ghost btn-xs"
                                 disabled={user.role === "admin"}
                            >
                           <TiUserDeleteOutline size={24} />
                           </button>
                        </th>
                        </tr>
                    
                        )
                    }
                    
                </tbody>
             </table>
             }
            </>
         }
        </div>
    );
};

export default page;