import React, { useState } from 'react';
import './Table.css';
import { FaArrowDown } from 'react-icons/fa6';
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";

import { useUserListQuery } from '../../../redux/userApi';


const UserTable: React.FC = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useUserListQuery();
    const [isChecked, setChecked] = useState(false);

    console.log("RTK: ", data);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs font-medium text-[#667085]">
                    <tr>
                        <th scope="col" className="p-4 w-4/12">
                            <div className="flex items-center">
                                <label className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                                User Info <FaArrowDown />
                            </div>
                        </th>

                        <th scope="col" className="px-6 py-3 w-4/12">
                            About
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-1/4 p-4">
                            <div className='flex gap-7'>
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4" />
                                    <label id="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                                <div className="flex items-center">
                                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                    <div className="ps-3">
                                        <div className="text-[14px] font-medium text-[#101828]">Neil Sims</div>
                                        <div className="text-[14px] font-normal text-[#667085]">neil.sims@flowbite.com</div>
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td className="px-6 py-4">
                            <div className="ps-3">
                                <div className="text-[14px] font-normal text-[#101828]">Neil Sims</div>
                                <div className="text-[14px] font-normal text-[#667085]">neil.sims@flowbite.com</div>
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center gap-8">
                                <div className="px-2.5 py-1 rounded-2xl font-medium text-xs bg-[#ecfdf3] text-[#027A48]">Random Sticker Label</div>

                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <div className='flex gap-4 text-xl'>
                                <span className='cursor-pointer'><RiDeleteBinLine /></span>
                                <span className='cursor-pointer'><LuPencil /></span>

                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Edit user modal */}
            <div id="editUserModal" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 items-center justify-center hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <form className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        {/* ... Your modal header goes here ... */}

                        {/* Modal body */}
                        {/* ... Your form fields go here ... */}

                        {/* Modal footer */}
                        {/* ... Your modal footer goes here ... */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserTable;
