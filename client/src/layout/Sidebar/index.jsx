import React from 'react'
import { Link, Outlet, useMatches } from 'react-router-dom';
import { icAccount, icPost } from "../../utils/assets"
import Breadcrumb from '../../components/Breadcumb/index';

function getItem(label, icon, link = "/errors") {
  return (
    <li>
      <div className="w-full mb-4  group flex flex-col rounded-lg hover:font-bold hover:text-white  hover:bg-[#2374E1]">
        <Link to={link} className="flex justify-center py-2 px-6">
          <img src={icon} alt="" className="w-6 h-6 mr-4" />
          <div className="md:flex hidden font-[Arial]  ">{label}</div>
        </Link>
      </div>
    </li>
  );
}

const items = [
  getItem("All posts", "category", "/"),
  getItem("Accounts", "group", "/account"),
  getItem(<span className={"text-action-red"}>{"Sign Out"}</span>, "logout"),
];
const App = () => {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  return (
    <section className='flex h-[100vh] w-[100vw] bg-white'>
      {/* sidebar */}
      <aside
        // className='h-full bg-red-200'
        className="w-72 z-10 h-screen"
        aria-label="Sidebar"
      >
        <div className='w-full px-11 '>
          <img src="" alt="" />
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
            <button className='bg-[#2374E1] rounded-[10px] p-4 px-10 text-white'>Create A Post</button>
          </div>
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