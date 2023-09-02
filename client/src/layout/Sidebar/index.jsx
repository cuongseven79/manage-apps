import React, { useState } from 'react'
import { Link, Outlet, useMatches } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcumb/index';
import icAccount from "../../assets/icons/ic-account.svg"
import icPost from "../../assets/icons/ic-post.svg"
import icSignOut from "../../assets/icons/ic-signout.svg"

function CreatePostDialog({ isOpen, setIsOpen }) {

  return (
    <div open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 bg-gray-500/50 backdrop-blur-sm" />
      <div className="px-3 fixed left-[50%] top-[50%] z-50 flex w-[500px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center gap-[20px] rounded-lg bg-white p-0 shadow-lg">
        <div className="p-x-[10px] flex w-full flex-row items-center justify-between border-b p-[16px] text-xl">
          <span>Create a post</span>
          <button onClick={() => setIsOpen(false)}>
            <p className="p-1 hover:rounded-md hover:bg-[#8278ED]/10" >X</p>
          </button>
        </div>

        <div className='w-full flex gap-2'>
          <span>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
              alt=""
              width={40}
              height={40}
              className='rounded-[50%] h-full'
            />
          </span>
          <div className='flex flex-col '>
            <span className='text-[14px] font-bold'>Sam Guy</span>
            <span className='text-[14px] text-black/50'>@Sam Guy</span>
          </div>
        </div>
        <form className="text-center w-full mb-4">
          <div className='flex gap-2 items-center'>
            <textarea className=' outline-none rounded-[10px] w-full' placeholder='Enter description..' name="" id="" cols="30" rows="5"></textarea>
          </div>
          <div className="mb-4">
            <label for="options" className="block text-gray-700 font-bold">Choose your options:</label>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="text-indigo-600 " />
                <span className="ml-2 cursor-pointer">Facebook</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="text-indigo-600 " />
                <span className="ml-2 cursor-pointer">Instagram</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="text-indigo-600 " />
                <span className="ml-2 cursor-pointer">Twiter</span>
              </label>
            </div>
          </div>
          <div className="p-x-[10px] flex w-full flex-row items-center justify-end gap-[10px] border-t p-[16px] text-xl"></div>
          <button
            className="hover:bg-blue-700 bg-[#2374E1] w-full rounded-[10px] py-3 text-white"
            onClick={() => setIsOpen(false)}
          >Create</button>
        </form>
      </div>
    </div>
  );
}

function getItem(label, icon, link = "/errors") {
  return (
    <li>
      <div className="w-full mb-4  group flex flex-col rounded-lg hover:font-bold  hover:text-white  hover:bg-[#2374E1]">
        <Link to={link} className="flex justify-center py-2 px-6">
          <img src={icon} alt="" className="w-6 h-6 mr-4" />
          <div className="md:flex hidden font-[Arial] ">{label}</div>
        </Link>
      </div>
    </li>
  );
}

const items = [
  getItem("All posts", icPost, "/"),
  getItem("Accounts", icAccount, "/account"),
  getItem(<span className={"text-action-red"}>{"Sign Out"}</span>, icSignOut),
];
const App = () => {
  let [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));
  return (
    <section className='flex h-[100vh] w-[100vw] min-h-0 bg-white'>
      {/* sidebar */}
      <aside className="w-72 h-screen">
        <h1 className='p-10 text-[30px] font-[600] text-center'>Skilli Project</h1>
        <div className='w-full px-11'>
          <ul className=' text-slate-700 w-full '>{items}</ul>
        </div>
      </aside>
      {/* sub main */}
      <section className="flex-1 flex flex-col bg-slate-50/75 rounded-[16px]">
        <div className="flex flex-col">
          {/* header */}
          <header className="bg-white py-11"></header>
          {/* breadcumb */}
          <div className="h-full flex justify-between p-8 ">
            <Breadcrumb crumbs={crumbs} />
            <button
              className='hover:bg-blue-700 bg-[#2374E1] rounded-[10px] p-4 px-10 text-white '
              onClick={() => setIsOpenCreateModal(true)}
            >Create A Post</button>
          </div>
          {isOpenCreateModal && <CreatePostDialog isOpen={isOpenCreateModal} setIsOpen={setIsOpenCreateModal} />}
        </div>
        {/* main content pages */}
        <section className='h-screen'>
          <Outlet />
        </section>
      </section>
    </section>
  )
}

export default App;