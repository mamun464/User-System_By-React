import React from 'react';
import './User.css'
import { FiUploadCloud } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import UserTable from './Table/Table';

const Users = () => {
    return (
        <>
            <div className='font-inter max-w-7xl mx-auto'>
                <div className='my-8 flex justify-between'>
                    {/* left */}
                    <h1 className='text-[#101828] text-2xl font-medium'>Users</h1>
                    <div className='flex gap-3'>
                        <button className='text-[#344054] py-[10px] px-4 text-[14px] font-semibold bg-[#fff] rounded-lg custom-import flex items-center gap-2 hover:bg-[#9c76f6] hover:text-white'
                        ><FiUploadCloud />
                            <span>Import</span>
                        </button>

                        <button className='text-[14px] font-semibold bg-[#fff] rounded-lg py-[10px] px-4 text-[#fff] custom-add flex items-center gap-2 hover:bg-[#9c76f6] hover:text-white'
                        ><IoMdAdd /> Add User</button>
                    </div>
                </div>
                <UserTable></UserTable>
            </div>
        </>
    );
};

export default Users;