import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, useMatches, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcumb/index';
import icAccount from "../assets/icons/ic-account.svg"
import icPost from "../assets/icons/ic-post.svg"
import icSignOut from "../assets/icons/ic-signout.svg"

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
  getItem("All posts", icPost, "/dashboard"),
  getItem("Accounts", icAccount, "/accounts"),
  getItem(<span>Sign Out</span>, icSignOut, "/"),
];
const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const phoneNumberLocal = localStorage.getItem("phoneNumber")
    console.log("pathname:", location.pathname)
    if (location.pathname === '/dashboard') {
      if (!phoneNumberLocal) {
        navigate("/")
      }
    }
  }, [])

  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));
  return (
    <section className='flex h-[100vh] w-[100vw] bg-white'>
      {/* sidebar */}
      <aside className="w-72 h-screen ">
        <h1 className='p-10 text-[30px] font-[600] text-center'>Skilli Project</h1>
        <div className='w-full px-11'>
          <ul className=' text-slate-700 w-full '>{items}</ul>
        </div>
      </aside>
      {/* sub main */}
      <section className="flex-1 flex flex-col bg-slate-50/75 rounded-[16px] ">
        <div className="flex flex-col">
          {/* header */}
          <header className="bg-white py-10"></header>
          {/* breadcumb */}
          <div className="h-full px-24 py-6 ">
            <Breadcrumb crumbs={crumbs} />
          </div>
        </div>
        {/* main content pages */}
        <section className='overflow-auto'>
          <Outlet />
        </section>
      </section>
    </section>
  )
}

export default Layout;