import {useState, useEffect } from 'react'
import GroupDummy from './GroupDummy'
import {MdVideoCall} from "react-icons/md"
import {BiPhoneCall} from "react-icons/bi"
import {HiChatAlt2} from "react-icons/hi"

function AllGroups (){
    // const [adder, setAdder] = useState(true);
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        const storedValue = localStorage.getItem('inputData');
        if (storedValue) {
          setInputValue(storedValue);
        }
      }, []);
    
      useEffect(() => {
        fetch('https://school-list.onrender.com/form')
          .then(response => response.json())
          .then(data => {
            setData(data)
            console.log(data)
        })
          .catch(error => console.error(error));
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();
        // Save the input value to localStorage
        localStorage.setItem('inputData', inputValue);
        // Clear the input field
        setInputValue(inputValue);
      };

    
      const handleChange = (e) => {
        setInputValue(e.target.value);
      };
    
  return (
    <form id='formlink' onSubmit={handleSubmit} className="flex flex-col justify-center items-center py-10 mt-16">
        <div className='flex justify-between items-center p-1 fixed top-0 left-0 right-0 border-2 border-gray-200 dark:border-gray-700 bg-white opacity-75 shadow-md'>
            <span className='w-1/5'></span>
            <h3 className='font-bold text-xl'>VIEW GROUPS</h3>
            <button className='shadow bg-[#17255A] hover:bg-[#223785] focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded-full'>copy link</button>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
            <GroupDummy title="Group 1 - Team 1"/>
            <GroupDummy title="Group 2 - Team 2"/>
            <GroupDummy title="Group 3 - Team 3"/>
            <div className='flex flex-col justify-center items-center'>
                <div className=' uppercase text-xl font-bold'>
                    Group 4 -{data.length > 0 ? data[0].group_title: "No Title"}
                </div>
                <div className="max-w-[470px] flex-col m-2 py-8 px-8 space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6relative overflow-x-auto shadow-md sm:rounded-lg ">
            
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-2 py-3 bg-gray-400 dark:bg-gray-800">
                                    SN
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-400 dark:bg-gray-800">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 bg-gray-400 dark:bg-gray-800">
                                    Role
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-5">
                                    1
                                </td>
                                <th scope="row" className="w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {data.length > 0 ? data[0].user1: "Empty Group"}
                                </th>
                                <td className="px-6 max-w-[90px]">
                                {data.length > 0 ? data[0].role1: "Empty"}
                                </td>
                                
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-5">
                                    2
                                </td>
                                <th scope="row" className=" w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {data.length > 0 ? data[0].user2: "Empty Group"}
                                </th>
                                <td className="px-6 py-4 max-w-[90px]">
                                {data.length > 0 ? data[0].role2: "Empty"}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-5">
                                    3
                                </td>
                                <th scope="row" className=" w-[250px] px-6 py-4 font-medium text-gray-700 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {data.length > 0 ? data[0].user3: "Empty Group"}
                                </th>
                                <td className="px-6 max-w-[90px]">
                                    {data.length > 0 ? data[0].role3 : "Empty"}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-700">
                                <td className="px-2 py-5">
                                    4
                                </td>
                                <th scope="row" className="w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {data.length > 0 ? data[0].user4 : "Empty Group"}
                                </th>
                                <td className="px-6 max-w-[90px]">
                                {data.length > 0 ? data && data[0].role4 : "Empty"}
                                </td>
                            </tr>
                            <tr>
                                <td className="px-2 py-5">
                                    5
                                </td>
                                <th scope="row" className="w-[250px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {data.length > 0 ? data && data[0].user5 : "Empty Group"}
                                </th>
                                <td className="px-6 max-w-[90px]">
                                {data.length > 0 ? data[0].role5 : "Empty"}
                                </td>
                            </tr>
                        </tbody>
                        
                    </table>
                    <form className='w-full flex justify-between items-center'>
                        <input
                            value={inputValue} 
                            onChange={handleChange}
                            type='text' 
                            name='linkurl' 
                            placeholder="Enter Meeting Link" 
                            required 
                            className='px-2 h-8 border border-slate-300 outline-1 outline-[#17255A]  w-2/3 rounded-full mr-3 py-2'
                        />
                        <button type="submit"  className="my-2  w-1/3 shadow bg-[#17255A] hover:bg-[#223785] focus:shadow-outline focus:outline-none text-white py-2 px-1 rounded-full">Submit Link</button>
                    </form>
                    <div className='flex justify-start w-full text-xl text-slate-400'>
                        <span className='text-2xl cursor-pointer'> <MdVideoCall/></span>
                        <span className='cursor-pointer pl-4'> <BiPhoneCall/></span>
                        <span className='text-2xl cursor-pointer pl-4'> <HiChatAlt2/></span>
                    </div>
                </div>
            </div>
            
        </div>
    </form>

  )
}

export default AllGroups