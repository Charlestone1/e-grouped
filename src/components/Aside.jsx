import {BsImage} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {FaUsers} from 'react-icons/fa';
import {BiHelpCircle} from 'react-icons/bi';
import {VscFeedback} from 'react-icons/vsc';
import {SlSettings} from 'react-icons/sl';
import {FiLogOut} from 'react-icons/fi';
import learnableLogo from "../assets/images/learnable-logo.png"

function Aside () {
  return (
    <>
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#F9FAFB] dark:bg-gray-800">
            <div className="flex items-center justify-between py-1 border-b-4 border-slate-200">
                <span className="flex justify-center items-center cursor-pointer text-lg h-7 w-7 rounded-full bg-[#E4E7EC]"><BsImage/> </span>
                <a href='https://team6scrumer.netlify.app/' className="whitespace-nowrap dark:text-white flex justify-center items-center cursor-pointer">Add new <span className="px-2 "><AiOutlinePlus/></span></a>
            </div>
            <div className='flex flex-col justify-between items-center'>
                <div className='flex justify-center items-center h-32 w-32 bg-[#03CEA4] rounded-full my-2'>
                    <img src={learnableLogo} alt='Learnable'/>
                </div>
                <h4 className='text-xl font-semibold mb-2'>Learnable ‘22</h4>
            </div>
            <div className='flex bg-[#E4E7EC] text-md pl-6 py-1 text-[#475467]'>Groups</div>
            <ul className="space-y-1 font-medium">
                <li>
                    <a href="https://google.com" className="flex items-center py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className='text-xl pl-6 text-[#667085]'><FaUsers /> </span>
                    <p className="ml-3 text-md">Scrum groups</p>
                    </a>
                </li>
                <li>
                    <a href="https://google.com" className="flex items-center py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className='text-xl pl-6 text-[#667085]'><FaUsers /> </span>
                    <p className="ml-3 text-md">Minority Report</p>
                    </a>
                </li>
                <li>
                    <a href="https://google.com" className="flex items-center py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className='text-xl pl-6 text-[#667085]'><FaUsers /> </span>
                    <p className="ml-3 text-md">Blockchain</p>
                    </a>
                </li>
                <li>
                    <a href="https://google.com" className="flex items-center py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className='text-xl pl-6 text-[#667085]'><FaUsers /> </span>
                    <p className="ml-3 text-md">Task groups</p>
                    </a>
                </li>
                
            </ul>
            <div className='flex bg-[#E4E7EC] text-md pl-6 py-1 text-[#475467]'>Links</div>
            <ul className="space-y-1 font-medium">
                <li>
                    <a href="https://google.com" className="flex items-center py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className='text-xl pl-6 text-[#667085]'><BiHelpCircle /> </span>
                    <p className="ml-3 text-md">Help & FAQ</p>
                    </a>
                </li>
                <li>
                    <a href="https://google.com" className="flex items-center py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className='text-xl pl-6 text-[#667085]'><VscFeedback /> </span>
                    <p className="ml-3 text-md">Feedback</p>
                    </a>
                </li>
                <li>
                    <a href="https://google.com" className="flex items-center py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className='text-xl pl-6 text-[#667085]'><SlSettings /> </span>
                    <p className="ml-3 text-md">Settings</p>
                    </a>
                </li>
                <li>
                    <a href="https://google.com" className="flex items-center py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className='text-xl pl-6 text-[#667085]'><FiLogOut /> </span>
                    <p className="ml-3 text-md">Log out</p>
                    </a>
                </li>
                
            </ul>

        </div>
        </aside>
    </>
  )
}

export default Aside