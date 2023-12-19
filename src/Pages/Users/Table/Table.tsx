import React, { useState } from 'react';
import './Table.css';
import { FaArrowDown } from 'react-icons/fa6';
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";

import { useUserListQuery } from '../../../redux/userApi';
import CustomCheckbox from './CustomCheckBox/CustomCheckbox';


const UserTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, error, isLoading, isFetching, isSuccess } = useUserListQuery(
        currentPage
    );
    const isLastPage = currentPage === data?.total_pages;
    const isFistPage = currentPage === 1;

    const LastButtonStyles = {
        // color: isLastPage ? '#ff0000' : '#344054',
        cursor: isLastPage ? 'not-allowed' : 'pointer',
    };
    const FirstButtonStyles = {
        // color: isLastPage ? '#ff0000' : '#344054',
        cursor: isFistPage ? 'not-allowed' : 'pointer',
    };
    const [isChecked, setChecked] = useState(false);

    const getRandomJob = (index) => {
        // Define an array of dummy jobs
        const dummyJobs = [
            { job: 'Software Engineer', description: 'Designs and implements scalable software solutions.', status: 'Active Employee' },
            { job: 'Data Scientist', description: 'Analyzes and interprets complex data sets.', status: 'Deactivate Employee' },
            { job: 'Frontend Developer', description: 'Builds interactive and responsive user interfaces.', status: 'Active Employee' },
            { job: 'QA Tester', description: 'Ensures software quality through comprehensive testing.', status: 'Active Employee' },
            { job: 'QA Tester', description: 'Ensures software quality through comprehensive testing.', status: 'Deactivate Employee' },
            { job: 'Administration Job', description: 'Manages administrative tasks and processes.', status: 'Active Employee' },
        ];

        // Get a random index within the range of the array length
        const randomIndex = Math.floor(Math.random() * dummyJobs.length);
        // index;

        // Get a random job object
        return dummyJobs[randomIndex];
    };

    console.log("RTK: ", data);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };


    const handleNextPage = () => {
        const currentPage = data?.page || 1;
        if (currentPage + 1 <= data?.total_pages) {
            setCurrentPage((currentPage) => currentPage + 1);
        }
    };
    const handlePreviousPage = () => {
        const currentPage = data?.page || 1;
        if (currentPage > 1) {
            setCurrentPage((currentPage) => currentPage - 1);
        }
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-[#EAECF0]">
                <thead className="text-xs font-medium text-[#667085] bg-[#F9FAFB]">
                    <tr>
                        <th scope="col" className="p-4 w-4/12">
                            <div className="flex items-center gap-2">
                                <span>
                                    <CustomCheckbox
                                    />
                                </span>
                                User Info <FaArrowDown />
                            </div>
                        </th>

                        <th scope="col" className="px-6 py-3 w-4/12">
                            About
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 ">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {isSuccess &&
                        data?.data.map((user, index) => {
                            // Get random job and description for each user
                            const { job, description, status } = getRandomJob(index);
                            const backgroundColorClass = status === 'Deactivate Employee' ? 'bg-gray-100' : 'bg-[#ecfdf3]';
                            const textColorClass = status === 'Deactivate Employee' ? 'text-gray-700' : 'text-[#027a48]';

                            return (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-1/4 p-4">
                                        <div className='flex gap-7'>
                                            <div className="flex items-center">
                                                <CustomCheckbox></CustomCheckbox>
                                                {/* <input id={`checkbox-table-search-${index}`} type="checkbox" className="w-4 h-4" /> */}
                                                <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
                                            </div>
                                            <div className="flex items-center">
                                                <img className="w-10 h-10 rounded-full" src={user?.avatar} alt="Jese image" />
                                                <div className="ps-3">
                                                    <div className="text-[14px] font-medium text-[#101828]">{user?.first_name} {user?.last_name}</div>
                                                    <div className="text-[14px] font-normal text-[#667085]">{user?.email}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <div className="ps-3">
                                            <div className="text-[14px] font-normal text-[#101828]">{job}</div>
                                            <div className="text-[14px] font-normal text-[#667085]">{description}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-8">
                                            <div className={`px-2.5 py-1 rounded-2xl font-medium text-xs ${backgroundColorClass} ${textColorClass}`}>
                                                {status}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex gap-4 text-xl'>
                                            <span className='cursor-pointer'><RiDeleteBinLine /></span>
                                            <span className='cursor-pointer'><LuPencil /></span>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-1/4 pl-4">
                            <div className='flex gap-7'>
                                <button
                                    className='text-[#344054] py-2 px-[14px] text-[14px] font-semibold bg-[#fff] rounded-lg custom-import flex items-center gap-2'
                                    onClick={handlePreviousPage}
                                    disabled={isFistPage}
                                    style={FirstButtonStyles}
                                >
                                    Previous
                                </button>
                            </div>
                        </td>

                        <td colSpan={2} className="px-6 py-4">
                            <div className="ps-3 w-1/2 flex justify-center text-[#344054] font-medium">
                                <h1>Page {data?.page} of {data?.total_pages}</h1>
                            </div>
                        </td>

                        <td className="pr-4">
                            <div className='flex justify-end gap-7'>
                                <button
                                    className='text-[#344054] py-2 px-[14px] text-[14px] font-semibold bg-[#fff] rounded-lg custom-import flex items-center gap-2'
                                    onClick={handleNextPage}
                                    disabled={isLastPage}
                                    style={LastButtonStyles}
                                >
                                    Next
                                </button>
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
        </div >
    );
};

export default UserTable;
